import crypto from "crypto";

export type PayfastOrder = {
  amount: number;
  itemName: string;
  buyerFirstName: string;
  buyerLastName: string;
  buyerEmail: string;
  returnUrl: string;
  cancelUrl: string;
  notifyUrl: string;
  customStr1?: string;
};

export function isPayfastConfigured() {
  return Boolean(
    process.env.PAYFAST_MERCHANT_ID && process.env.PAYFAST_MERCHANT_KEY,
  );
}

function encode(value: string) {
  return encodeURIComponent(value).replace(/%20/g, "+");
}

export function buildPayfastRedirect(order: PayfastOrder) {
  const merchantId = process.env.PAYFAST_MERCHANT_ID;
  const merchantKey = process.env.PAYFAST_MERCHANT_KEY;
  const passphrase = process.env.PAYFAST_PASSPHRASE;
  const sandbox = process.env.PAYFAST_SANDBOX !== "false";

  if (!merchantId || !merchantKey) {
    throw new Error("PayFast is not configured");
  }

  const fields: [string, string][] = [
    ["merchant_id", merchantId],
    ["merchant_key", merchantKey],
    ["return_url", order.returnUrl],
    ["cancel_url", order.cancelUrl],
    ["notify_url", order.notifyUrl],
    ["name_first", order.buyerFirstName],
    ["name_last", order.buyerLastName],
    ["email_address", order.buyerEmail],
    ["amount", order.amount.toFixed(2)],
    ["item_name", order.itemName],
  ];

  if (order.customStr1) fields.push(["custom_str1", order.customStr1]);

  const paramString = fields
    .map(([key, value]) => `${key}=${encode(value)}`)
    .join("&");

  const signatureBase = passphrase
    ? `${paramString}&passphrase=${encode(passphrase)}`
    : paramString;

  const signature = crypto.createHash("md5").update(signatureBase).digest("hex");

  const host = sandbox
    ? "https://sandbox.payfast.co.za/eng/process"
    : "https://www.payfast.co.za/eng/process";

  return `${host}?${paramString}&signature=${signature}`;
}
