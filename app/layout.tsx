import "./globals.css";

export const metadata = {
  title: "Rheo",
  description: "RheoPassport",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
