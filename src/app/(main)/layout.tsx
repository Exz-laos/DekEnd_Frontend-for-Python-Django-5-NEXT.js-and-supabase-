import type { Metadata } from "next";

import Footer from "@/components/frontend/shared/Footer";
import Navbar from "@/components/frontend/shared/Navbar";

export const metadata: Metadata = {
    title: "Dekend - Find the internship jobs for Students",
    description: "Website for looking for internships jobs for Students",
}
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
        <Navbar/>
          {children}
        <Footer/>
   </>
   
  );
}
