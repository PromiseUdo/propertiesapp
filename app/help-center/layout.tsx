import "./style.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { clsx } from "clsx";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "PropertiesAPp",
  description: "Help Center",
};

export default function HelpCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
