import "./globals.css";
import { inter, roboto_mono, inconsolata } from "../util/fonts";
import Mouse from "@util/Mouse";

export const metadata = {
  title: "Lee Jinbok's Portfolio",
  description: "Generated by create next.js (v13.4.5) app",
  keywords: ["jinbok", "leejinbok", "진복", "이진복"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth antialiased ${inconsolata.variable} ${inter.variable} ${roboto_mono.variable}`}
    >
      <body>
        <Mouse />
        {children}
      </body>
    </html>
  );
}
