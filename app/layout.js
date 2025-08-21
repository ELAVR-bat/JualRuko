export const metadata = {
  title: "PS. Anita - Properti Terbaik di Pekanbaru",
  description: "Menjual Ruko, Tanah, dan Homestay di Pekanbaru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
