import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const services = [
  {
    name: "Pojedyncze wejście",
    description: "Idealne na start lub sporadyczne wizyty. Dostęp do dowolnych zajęć grupowych.",
    price: "50 zł",
  },
  {
    name: "Karnet 4 wejścia",
    description: "Regularna praktyka w korzystnej cenie. Ważny 30 dni od daty zakupu.",
    price: "180 zł",
  },
  {
    name: "Karnet 8 wejść",
    description: "Dla zaangażowanych w regularną praktykę. Ważny 30 dni od daty zakupu.",
    price: "320 zł",
  },
  {
    name: "Karnet OPEN",
    description: "Nielimitowany dostęp do wszystkich zajęć grupowych w miesiącu.",
    price: "300 zł",
  },
  {
    name: "Zajęcia indywidualne",
    description: "Spersonalizowana sesja dopasowana do Twoich potrzeb i celów.",
    price: "150 zł / 60 min",
  },
  {
    name: "Warsztaty tematyczne",
    description: "Specjalistyczne spotkania pogłębiające wiedzę i praktykę jogi.",
    price: "od 200 zł",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Cennik Usług</h2>
          <p className="text-lg text-muted-foreground">
            Wybierz opcję, która najlepiej odpowiada Twoim potrzebom i dołącz do naszej społeczności.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="border rounded-lg shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[30%] font-bold text-lg">Usługa</TableHead>
                  <TableHead className="w-[50%] font-bold text-lg">Opis</TableHead>
                  <TableHead className="text-right font-bold text-lg">Cena</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.name}>
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell className="text-muted-foreground">{service.description}</TableCell>
                    <TableCell className="text-right font-semibold">{service.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Wszystkie karnety są imienne. Akceptujemy karty Multisport, Medicover Sport i FitProfit.
          </p>
        </div>
      </div>
    </section>
  );
}