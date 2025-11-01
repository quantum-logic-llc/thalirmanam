'use client';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useMessage } from '@/context/messageContext';

const WhatsAppIcon = () => {
  const { message } = useMessage();
  const defaultMessage = "Hello, I would like to book an appointment.";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  const whatsappUrl = `https://wa.me/918925336967?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppIcon;
