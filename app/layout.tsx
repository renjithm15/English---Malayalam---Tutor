export const metadata = {
  title: "English–Malayalam Tutor",
  description: "English speaking practice for Malayalam speakers"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
