
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-[url('/technology/background-desktop.jpg')] text-white">
        {children}
      </div>
  );
}
