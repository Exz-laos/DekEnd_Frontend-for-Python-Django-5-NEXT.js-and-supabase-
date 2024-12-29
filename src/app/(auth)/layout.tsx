import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Dekend - Find the internship jobs for Students",
    description: "Website for looking for internships jobs for Students",
}
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
         {children}
    </div>
  );
}
