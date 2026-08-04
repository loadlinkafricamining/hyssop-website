import Link from "next/link";
import { Leaf } from "lucide-react";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-6 py-32 text-center">
      <Leaf className="h-10 w-10 text-olive" />
      <h1 className="font-serif text-4xl text-ink">Page not found</h1>
      <p className="max-w-md text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link href="/" className={buttonVariants()}>
        Back to home
      </Link>
    </Container>
  );
}
