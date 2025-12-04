import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function SocialBar() {
  return (
    <div className="bg-green-700 text-white flex justify-end gap-6 px-6 py-3">
      {/* Facebook */}
      <a 
        href="#" 
        className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
        title="Facebook"
      >
        <Facebook size={20} />
      </a>

      {/* Twitter/X */}
      <a 
        href="#" 
        className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
        title="Twitter"
      >
        <Twitter size={20} />
      </a>

      {/* Instagram */}
      <a 
        href="#" 
        className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
        title="Instagram"
      >
        <Instagram size={20} />
      </a>

      {/* YouTube */}
      <a 
        href="#" 
        className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
        title="YouTube"
      >
        <Youtube size={20} />
      </a>

      {/* LinkedIn */}
      <a 
        href="#" 
        className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
        title="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
    </div>
  );
}