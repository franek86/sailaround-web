import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] }, { weigth: [400, 600] });

export const metadata = {
  title: {
    default: "Sailaround Web - Your Premier Destination for Yachts",
    template: "%s | Sailaround Web",
  },
  description: "Welcome to Sailaround Web - Your Premier Destination for Yachts, Sailboats, Catamarans, and Motoryachts in the Mediterranean! Book the vessel of your dreams with our secure booking platform. Explore the beauty of the Mediterranean on our top-of-the-line watercraft. Unforgettable adventures await as you navigate the seas with Sailaround Web. Secure your journey now with our easy and reliable booking process. Discover a world of luxury and comfort on our exclusive fleet of yachts. Sailaround Web - Your gateway to extraordinary maritime experiences!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
