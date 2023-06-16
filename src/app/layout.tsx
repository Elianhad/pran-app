import '@fontsource/roboto'

export const metadata = {
  title: 'Pran APP',
  description: 'Aplicación para gestión de protocolos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
          {children}
      </body>
    </html>
  )
}
