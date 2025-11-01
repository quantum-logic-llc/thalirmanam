'use client';
import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChatBox = ({ isVisible, onClose }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() === '') return;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918925336967?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={`fixed bottom-24 right-8 z-50 w-80 sm:w-96 bg-white rounded-xl shadow-2xl transition-all duration-300 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      {/* Header */}
      <div className="bg-green-500 text-white p-4 rounded-t-xl flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaWhatsapp className="text-2xl" />
          <h3 className="text-lg font-bold tracking-wide">Chat with us</h3>
        </div>
        <button onClick={onClose} className="text-white text-2xl font-bold hover:opacity-80 transition-opacity">&times;</button>
      </div>

      {/* Message Area */}
      <div className="p-4 bg-gray-50" style={{ minHeight: '150px' }}>
        <p className="text-sm text-gray-600 bg-white p-3 rounded-lg shadow-sm inline-block">
          Hello! How can we help you today?
        </p>
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-gray-200 rounded-b-xl flex items-center gap-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow h-12 p-2 border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
          placeholder="Type your message..."
          rows="1"
        ></textarea>
        <button
          onClick={handleSend}
          className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!message.trim()}
          aria-label="Send Message"
        >
          <IoMdSend className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChatBox;
