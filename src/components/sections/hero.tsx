import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-yoga");

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] min-h-[500px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold mb-4">
          Odkryj Harmonię Ciała i Umysłu
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
          Dołącz do mnie na macie i rozpocznij swoją podróż ku wewnętrznemu spokojowi, sile i elastyczności.
        </p>
        <Link href="#pricing">
          <Button size="lg">
            Zobacz Cennik <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
