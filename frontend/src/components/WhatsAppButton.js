import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919839001970'; // Format: country code + number without +
  const message = 'Hello! I am interested in your concrete products.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
      data-testid="whatsapp-button"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;