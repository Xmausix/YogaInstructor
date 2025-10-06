"use server";

import * as z from "zod";

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

export async function submitContactForm(data: z.infer<typeof formSchema>) {
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: "Nieprawidłowe dane formularza." };
  }
  
  // Simulate API call/email sending
  console.log("Form data submitted to server:", parsedData.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real application, you would:
  // 1. Send an email or save to a database
  // 3. Return a success or error message

  // For this example, we'll always return success.
  return { success: true, message: "Wiadomość wysłana pomyślnie!" };
}
