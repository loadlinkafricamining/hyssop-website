import Image from "next/image";

export function ProductGallery({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative mx-auto aspect-[4/5] w-full max-w-md cursor-zoom-in overflow-hidden bg-beige">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(min-width: 1024px) 480px, 90vw"
      />
    </div>
  );
}
