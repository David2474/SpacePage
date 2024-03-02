
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-[url('/destination/bg-destination-desktop.jpg')]">
        {children}
      </div>
  );
}
