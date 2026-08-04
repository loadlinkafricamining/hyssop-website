import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { products } from "@/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/faq",
    "/legal/privacy-policy",
    "/legal/terms",
    "/legal/refund-policy",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteConfig.url}/shop/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...productRoutes];
}
