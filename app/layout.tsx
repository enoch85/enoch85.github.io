import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Hansson - Datacenter Manager & Systemadministratör",
  description: "Datacenter Manager med passion för automation, stabilitet och kontinuerlig förbättring. Kombinerar teknisk expertis inom Linux, virtualisering och infrastruktur med beprövad förmåga att leda team och driva moderniserings- och migreringsprojekt.",
  keywords: [
    "Daniel Hansson",
    "Datacenter Manager",
    "Systemadministratör",
    "Open Source",
    "Linux",
    "Virtualisering",
    "VMware",
    "Nextcloud",
    "DevOps",
    "Automation",
    "Infrastruktur",
    "Drift",
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
    title: "Daniel Hansson - Datacenter Manager & Systemadministratör",
    description: "Datacenter Manager med passion för automation, stabilitet och kontinuerlig förbättring. Kombinerar teknisk expertis inom Linux, virtualisering och infrastruktur med beprövad förmåga att leda team och driva moderniserings- och migreringsprojekt.",
    siteName: "Daniel Hansson CV",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daniel Hansson - Datacenter Manager & Systemadministratör",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Hansson - Datacenter Manager & Systemadministratör",
    description: "Datacenter Manager med passion för automation, stabilitet och kontinuerlig förbättring. Kombinerar teknisk expertis inom Linux, virtualisering och infrastruktur.",
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
    <html lang="sv" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
