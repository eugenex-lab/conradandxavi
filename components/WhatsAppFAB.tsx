import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { FIRM_INFO } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppFAB: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after a slight delay
    const timer = setTimeout(() => setShowTooltip(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    // Ensuring Nigerian country code if number starts with 0
    let phoneNumber = FIRM_INFO.phones[0].replace(/\s/g, "");
    if (phoneNumber.startsWith("0")) {
      phoneNumber = "234" + phoneNumber.substring(1);
    }
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="mr-5 bg-white dark:bg-navy-light p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative border border-gold/20 dark:border-gold/30 min-w-[220px] pointer-events-auto"
          >
            {/* Premium Gold Pointer Triangle */}
            <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-navy-light rotate-45 border-t border-r border-gold/20 dark:border-gold/30"></div>

            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-3 right-3 text-navy/40 dark:text-gold/50 hover:text-gold dark:hover:text-gold transition-colors"
            >
              <X size={14} />
            </button>

            <div className="pr-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold dark:text-gold/80">
                  Active Support
                </p>
              </div>
              <p className="text-[15px] font-serif italic text-navy dark:text-white mb-1 leading-tight">
                Expert Advisory
              </p>
              <p className="text-[14px] text-navy/60 dark:text-gray-400 font-light leading-snug">
                How can we help you today?
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={openWhatsApp}
        className="pointer-events-auto bg-navy dark:bg-gold text-white dark:text-navy p-4 rounded-full shadow-[0_20px_50px_rgba(197,160,33,0.3)] transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center relative group border border-gold/50 overflow-hidden"
        title="Contact us on WhatsApp"
      >
        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        <MessageCircle
          size={30}
          fill="currentColor"
          className="relative z-10 group-hover:text-navy transition-colors duration-500"
        />

        {/* Subtle Notification Badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4 z-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-gold border-[1.5px] border-white dark:border-navy-dark"></span>
        </span>
      </button>
    </div>
  );
};

export default WhatsAppFAB;
