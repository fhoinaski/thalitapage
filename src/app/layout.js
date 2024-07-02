// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "THALITA CRISTINA STUDIO & ACADEMY | Extensão de Cílios e Design de Sobrancelhas",
  description: "Especialista em embelezamento do olhar. Oferecemos serviços de extensão de cílios, volume brasileiro, volume diamante, efeito sereia, fox eyes e design de sobrancelhas em Florianópolis.",
  keywords: "extensão de cílios, design de sobrancelhas, volume brasileiro, volume diamante, efeito sereia, fox eyes, Florianópolis",
  author: "Thalita Cristina",
  openGraph: {
    title: "THALITA CRISTINA STUDIO & ACADEMY | Beleza para o seu Olhar",
    description: "Transforme seu olhar com nossos serviços especializados de extensão de cílios e design de sobrancelhas.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.thalitacristinastudio.com.br", // Substitua pelo URL real do seu site
    siteName: "THALITA CRISTINA STUDIO & ACADEMY",
  },
  robots: "index, follow",
  canonical: "https://www.thalitacristinastudio.com.br", // Substitua pelo URL real do seu site
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.canonical} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
