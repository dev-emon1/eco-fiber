import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ECO-FIBRE | MAK Eco Bag",
  description:
    "MAK Eco Bag – An eco-friendly innovation from jute fibre for a better world and green environment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
