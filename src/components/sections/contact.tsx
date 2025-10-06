"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Imię musi mieć co najmniej 2 znaki.",
  }),
  email: z.string().email({
    message: "Proszę podać poprawny adres email.",
  }),
  message: z.string().min(10, {
    message: "Wiadomość musi mieć co najmniej 10 znaków.",
  }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitContactForm(values);
    if (result.success) {
      toast({
        title: "Sukces!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Błąd!",
        description: result.message || "Wystąpił błąd podczas wysyłania wiadomości.",
      });
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Skontaktuj się</h2>
              <p className="text-lg text-muted-foreground">
                Masz pytania lub chcesz zapisać się na zajęcia? Wypełnij formularz lub skorzystaj z danych kontaktowych.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:kontakt@yogainstructor.pl" className="hover:text-primary transition-colors">
                  kontakt@yogainstructor.pl
                </a>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+48123456789" className="hover:text-primary transition-colors">
                  +48 123 456 789
                </a>
              </div>
            </div>
          </div>
          <Card className="p-6 sm:p-8 shadow-lg">
            <CardContent className="p-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Imię</FormLabel>
                      <FormControl>
                        <Input placeholder="Twoje imię" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="twój@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Wiadomość</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Twoja wiadomość..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </Button>
              </form>
            </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
