import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BackgroundBeams } from "../components/ui/background-beams";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donda Portfolio",
  description: "Nkosinathi Donda Mbokazi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <BackgroundBeams />
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
