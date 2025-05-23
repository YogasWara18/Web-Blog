import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
})


export const metadata = {
  title: "Blog - Read. Write. Learn",
  description: "Read. Write. Learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>{metadata?.title}</title>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
