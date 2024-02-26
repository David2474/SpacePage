
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-gray-800 text-white">
        {children}
      </div>
  );
}
