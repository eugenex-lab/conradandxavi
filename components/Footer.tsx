import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, MessageCircle, Clock } from "lucide-react";
import { FIRM_INFO } from "../constants";

interface FooterProps {
  isDarkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode = false }) => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/images/logo-dark.png"
                alt="Conrad & Xavi Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Strategically positioned to deliver superior legal advisory and
              representation for clients locally and globally. Established 2014.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-navy-light rounded-full text-gold hover:bg-white hover:text-navy transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-navy-light rounded-full text-gold hover:bg-white hover:text-navy transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-navy-light rounded-full text-gold hover:bg-white hover:text-navy transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6 border-b border-gold/30 pb-2">
              Navigation
            </h3>
            <ul className="space-y-4">
              {[
                "Home",
                "About",
                "Practice Areas",
                "Our Team",
                "Insights",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <Link
                    to={
                      link === "Home"
                        ? "/"
                        : `/${link.toLowerCase().replace(" ", "")}`
                    }
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Advisory Hours */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6 border-b border-gold/30 pb-2">
              Advisory Hours
            </h3>
            <div className="flex items-start space-x-3 text-gray-400">
              <Clock size={18} className="text-gold shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-bold text-white">Monday — Friday</p>
                <p className="font-light">8 AM — 6 PM</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6 border-b border-gold/30 pb-2">
              Get In Touch
            </h3>
            <ul className="space-y-6 text-sm">
              {/* WhatsApp Secure Line */}
              <li className="flex flex-col space-y-1">
                <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">
                  WhatsApp Secure Line
                </span>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MessageCircle size={18} className="text-gold shrink-0" />
                  <a
                    href="https://api.whatsapp.com/send/?phone=2348038637444&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors font-medium"
                  >
                    08038637444
                  </a>
                </div>
              </li>

              {/* Call Line */}
              <li className="flex flex-col space-y-1">
                <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">
                  Direct Call Line
                </span>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone size={18} className="text-gold shrink-0" />
                  <div className="flex flex-wrap gap-x-2">
                    {FIRM_INFO.phones.map((phone, i) => (
                      <React.Fragment key={phone}>
                        <a
                          href={`tel:${phone}`}
                          className="hover:text-gold transition-colors font-medium"
                        >
                          {phone}
                        </a>
                        {i < FIRM_INFO.phones.length - 1 && (
                          <span className="opacity-30">|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </li>

              {/* Confidential Email */}
              <li className="flex flex-col space-y-1">
                <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">
                  Confidential Email
                </span>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail size={18} className="text-gold shrink-0" />
                  <a
                    href={`mailto:${FIRM_INFO.email}`}
                    className="hover:text-gold transition-colors font-medium"
                  >
                    {FIRM_INFO.email}
                  </a>
                </div>
              </li>

              {/* HQ Addresses */}
              <li className="pt-2">
                <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold block mb-3">
                  Office Locations
                </span>
                <div className="space-y-4">
                  {FIRM_INFO.addresses.map((addr, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 text-gray-400 group/addr"
                    >
                      <MapPin size={18} className="text-gold shrink-0 mt-1" />
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold transition-colors duration-300 leading-snug"
                      >
                        {addr}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} {FIRM_INFO.name}. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
            <span className="text-gold font-semibold uppercase">
              {FIRM_INFO.membership} Member
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
