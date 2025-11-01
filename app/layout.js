import '../src/index.css'
import WhatsAppIcon from '../src/components/ui/whatsappIcon'
import { MessageProvider } from '../src/context/messageContext'

export const metadata = {
  title: 'Thalirmanam - Nurturing Young Minds',
  description: 'Thalirmanam is a nurturing and stimulating environment where children can learn, grow, and thrive. We offer a variety of programs for children of all ages, from infants to preschoolers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <MessageProvider>
          {children}
          <WhatsAppIcon />
        </MessageProvider>
      </body>
    </html>
  )
}