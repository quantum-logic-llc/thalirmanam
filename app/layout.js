import '../src/index.css'

export const metadata = {
  title: 'Ascent - Childcare & Kids School',
  description: 'Ascent - Childcare & Kids School React.js and Tailwind CSS Template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}