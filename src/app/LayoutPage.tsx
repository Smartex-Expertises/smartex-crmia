// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css"; // Fichier de styles global

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SMARTEX CRMIA", // Valeur par défaut pour le titre
  description:
    "SMARTEX CRM-IA, l'ensemble des prestations de l'entreprise qui visent à développer des solutions IA en vue d'assister et d'accompagner les entreprises à scaler plus rapidement et à améliorer leur performance globale.",
};

export default function RootLayout({
  children,
  name = "",
}: {
  children: React.ReactNode;
  name?: string; // Le titre peut être modifié à travers des pages individuelles
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <head>
          <title>{`SMARTEX CRMIA${name ? ` - ${name}` : ""}`}</title>
          <meta name="apple-mobile-web-app-title" content="CRMIA" />
        </head>
        <Header />
        {children}
      </body>
    </html>
  );
}