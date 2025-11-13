import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Hansson - Tech Entrepreneur & Infrastructure Expert",
  description: "En ovanlig mix av social och teknisk kompetens. Med erfarenhet från både försäljning, entreprenörskap och djup teknisk expertis inom Linux och datacenter-drift. Passionate open source-bidragare och skapare av innovativa infrastrukturlösningar.",
  keywords: [
    "Daniel Hansson",
    "Tech Entrepreneur",
    "Infrastructure Expert",
    "Datacenter Manager",
    "Linux Expert",
    "Open Source",
    "DevOps",
    "Nextcloud",
    "VMware",
    "Cloud Infrastructure",
  ],
  authors: [{ name: "Daniel Hansson" }],
  creator: "Daniel Hansson",
  publisher: "Daniel Hansson",
  metadataBase: new URL("https://rekrytera.danielhansson.nu"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "sv_SE",
    url: "https://rekrytera.danielhansson.nu",
    title: "Daniel Hansson - Tech Entrepreneur & Infrastructure Expert",
    description: "En ovanlig mix av social och teknisk kompetens. Med erfarenhet från både försäljning, entreprenörskap och djup teknisk expertis inom Linux och datacenter-drift.",
    siteName: "Daniel Hansson CV",
    images: [
      {
        url: "/og-image.png", // We'll create this later
        width: 1200,
        height: 630,
        alt: "Daniel Hansson - Tech Entrepreneur & Infrastructure Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Hansson - Tech Entrepreneur & Infrastructure Expert",
    description: "En ovanlig mix av social och teknisk kompetens inom Linux, datacenter-drift och open source.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
