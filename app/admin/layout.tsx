import "./styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { clsx } from "clsx";
// import useMediaQuery from "@/hooks/useMediaQuery";
import Header from "./dashboard/components/header/Header";
import Sidebar from "./dashboard/components/sidebar/Sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "PropertiesApp",
  description: "Admin Center",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isLaptop = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="grid h-screen grid-rows-[4rem_minmax(50px,_1fr)] grid-cols-1 sm:grid-cols-[13rem_minmax(100px,_1fr)] xl:grid-cols-[18rem_minmax(100px,_1fr)] relative bg-jaa-shades-bg w-full  max-w-[100vw] overflow-x-hidden">
      <div className="z-20 col-span-1 col-start-1 md:col-span-2 lg:col-start-2 lg:col-span-1 row-span-1 row-start-1 fixed top-0 left-0 right-0 w-full  bg-jaa-shades-white max-w-[100vw]  ">
        <Header />
      </div>

      <aside className="hidden static row-start-1 row-span-2 lg:flex flex-col lg:fixed top-0 left-0 lg:w-[13rem] xl:w-[18rem] z-20">
        <Sidebar />
      </aside>

      <main className="col-span-1 col-start-1 sm:col-span-2  lg:col-start-2 lg:col-span-1 row-span-1 row-start-2 py-6 bg-jaa-shades-bg  overflow-y-auto max-w-[100vw] overflow-x-hidden">
        {children}
      </main>
    </section>
  );
}
