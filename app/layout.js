import '../src/index.css'

export const metadata = {
  title: 'Thalirmanam - Nurturing Young Minds',
  description: 'Thalirmanam is a nurturing and stimulating environment where children can learn, grow, and thrive. We offer a variety of programs for children of all ages, from infants to preschoolers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}