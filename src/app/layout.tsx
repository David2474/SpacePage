import "./globals.css";
import Image from "next/image";
import Nav from "@/components/Nav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className=" h-12 items-center mt-9 flex justify-between">
          <Image
          src={"./shared/logo.svg"}
          alt="Images de estrella"
          width={40}
          height={40}
          className="ml-14"
          />
          <Nav/>
        </section>
        {children}  
      </body>
    </html>
  );
}
