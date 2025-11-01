'use client';
import '../src/index.css'
import WhatsAppIcon from '../src/components/ui/whatsappIcon'
import WhatsAppChatBox from '../src/components/ui/whatsappChatBox'
import { MessageProvider } from '../src/context/messageContext'
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);

  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <MessageProvider>
          {children}
          <WhatsAppIcon onClick={() => setIsChatBoxVisible(!isChatBoxVisible)} />
          <WhatsAppChatBox isVisible={isChatBoxVisible} onClose={() => setIsChatBoxVisible(false)} />
        </MessageProvider>
      </body>
    </html>
  )
}