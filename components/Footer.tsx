import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { FIRM_INFO } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/images/logo.png"
                alt="Conrad & Xavi Logo"
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
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

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6 border-b border-gold/30 pb-2">
              Core Practice
            </h3>
            <ul className="space-y-4">
              {[
                "Corporate Law",
                "Real Estate",
                "Litigation",
                "Family Law",
                "Business Advisory",
              ].map((item) => (
                <li key={item} className="text-gray-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6 border-b border-gold/30 pb-2">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              {FIRM_INFO.addresses.map((addr, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-sm text-gray-400"
                >
                  <MapPin size={18} className="text-gold shrink-0 mt-1" />
                  <span>{addr}</span>
                </li>
              ))}
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone size={18} className="text-gold shrink-0" />
                <span>{FIRM_INFO.phones.join(" | ")}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail size={18} className="text-gold shrink-0" />
                <span>{FIRM_INFO.email}</span>
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
