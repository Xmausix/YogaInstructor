import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, Heart, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const instructorImage = PlaceHolderImages.find((img) => img.id === "instructor-portrait");

  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-1 order-2">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">O mnie</h2>
            <p className="mb-4 text-lg text-muted-foreground">
              Witaj! Jestem Twoją instruktorką jogi i moją pasją oraz ścieżką życia od ponad 10 lat jest joga.
              Ukończyłam liczne kursy i warsztaty, pogłębiając swoją wiedzę w zakresie asan, medytacji i filozofii jogi.
            </p>
            <p className="mb-6 text-lg text-muted-foreground">
              Moim celem jest tworzenie bezpiecznej i przyjaznej przestrzeni, w której każdy, niezależnie od poziomu zaawansowania,
              może odkrywać jogę i czerpać z niej radość. Wierzę, że regularna praktyka prowadzi nie tylko do zdrowszego ciała,
              ale także do spokojniejszego umysłu i głębszego kontaktu z samym sobą.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Leaf className="w-8 h-8 text-primary" />
                <p>Uważność</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Heart className="w-8 h-8 text-primary" />
                <p>Praktyka z serca</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Sparkles className="w-8 h-8 text-primary" />
                <p>Wewnętrzna energia</p>
              </div>
            </div>
          </div>
          <div className="md:order-2 order-1 flex justify-center">
            {instructorImage && (
              <Card className="overflow-hidden shadow-2xl w-full max-w-sm rounded-lg">
                <CardContent className="p-0">
                  <Image
                    src={instructorImage.imageUrl}
                    alt={instructorImage.description}
                    width={600}
                    height={800}
                    className="object-cover aspect-[3/4]"
                    data-ai-hint={instructorImage.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
