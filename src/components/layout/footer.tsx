import { Flower2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-6">
          <div className="flex items-center gap-2">
            <Flower2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-foreground">YogaInstructor.pl</span>
          </div>
          <p className="text-sm md:flex-grow text-center">
            © {new Date().getFullYear()} YogaInstructor.pl. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
