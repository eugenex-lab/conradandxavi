import React from "react";
import { MessageCircle } from "lucide-react";
import { FIRM_INFO } from "../constants";

const WhatsAppFAB: React.FC = () => {
  const openWhatsApp = () => {
    // Ensuring Nigerian country code if number starts with 0
    let phoneNumber = FIRM_INFO.phones[0].replace(/\s/g, "");
    if (phoneNumber.startsWith("0")) {
      phoneNumber = "234" + phoneNumber.substring(1);
    }
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center"
      title="Contact us on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </button>
  );
};

export default WhatsAppFAB;
