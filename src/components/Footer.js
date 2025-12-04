import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="w-12 h-12 bg-yellow-900 rounded-full flex items-center justify-center text-white font-bold text-xl border-2 border-yellow-700 mb-4">
              P
            </div>
            <h3 className="text-lg font-bold mb-4">Panch Shakti</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Ancient wisdom of Panchagavya meets modern well-being for your healthy lifestyle.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition">
                <Youtube size={18} />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-green-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full"></span>About Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full"></span>Blog</a></li>
              <li><a href="#" className="hover:text-green-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full"></span>Careers</a></li>
              <li><a href="#" className="hover:text-green-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full"></span>Press</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-green-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full"></span>Help Center</a></li>
              <li><a href="#" className="hover:text-green-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full"></span>Contact Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full"></span>FAQ</a></li>
              <li><a href="#" className="hover:text-green-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full"></span>Shipping Info</a></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="hover:text-green-500 transition cursor-pointer">info@panchshakti.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="hover:text-green-500 transition cursor-pointer">+91 9876543210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm">Kolhapur, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Footer */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="text-gray-400 text-sm">
            <p>&copy; 2025 Panch Shakti. All rights reserved.</p>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-green-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-green-500 transition">Terms of Service</a>
            <a href="#" className="hover:text-green-500 transition">Cookie Policy</a>
          </div>

          {/* Payment Methods or Badge */}
          <div className="text-right text-gray-400 text-sm">
            <p>Secure & Fast Delivery</p>
          </div>
        </div>
      </div>
    </footer>
  );
}