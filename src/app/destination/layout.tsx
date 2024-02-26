
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-[url('/crew/bg-destination-desktop.jpg')]">
        {children}
      </div>
  );
}
