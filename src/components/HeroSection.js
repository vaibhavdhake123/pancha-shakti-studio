import { ArrowRight, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center overflow-hidden"
      style={{
        backgroundImage:  'linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0)), url(https://rkmshospitalvrindavan.rkmm.org/Ayurveda.webp)',
        backgroundAttachment: 'fixed',
      }}
    > 
    
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        {/* Main Heading - Animated */}
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-yellow-900 mb-6 leading-tight 
        animate-in fade-in slide-in-from-left-8 duration-1000">
          <span className="inline-block animate-in fade-in slide-in-from-left-12 duration-1000">P</span>
          <span className="inline-block animate-in fade-in slide-in-from-left-12 duration-1000" style={{ animationDelay: '0.1s' }}>a</span>
          <span className="inline-block animate-in fade-in slide-in-from-left-12 duration-1000" style={{ animationDelay: '0.2s' }}>n</span>
          <span className="inline-block animate-in fade-in slide-in-from-left-12 duration-1000" style={{ animationDelay: '0.3s' }}>c</span>
          <span className="inline-block animate-in fade-in slide-in-from-left-12 duration-1000" style={{ animationDelay: '0.4s' }}>h</span>
          <span className="inline-block animate-in fade-in slide-in-from-left-12 duration-1000" style={{ animationDelay: '0.5s' }}>s</span>
          <span className="inline-block animate-in fade-in slide-in-from-left-12 duration-1000" style={{ animationDelay: '0.6s' }}>h</span>
          <span className="inline-block animate-in fade-in slide-in-from-left-12 duration-1000" style={{ animationDelay: '0.7s' }}>a</span>
          <span className="inline-block animate-in fade-in slide-in-from-left-12 duration-1000" style={{ animationDelay: '0.8s' }}>k</span>
          <span className="inline-block animate-in fade-in slide-in-from-left-12 duration-1000" style={{ animationDelay: '0.9s' }}>t</span>
          <span className="inline-block animate-in fade-in slide-in-from-left-12 duration-1000" style={{ animationDelay: '1s' }}>i</span>
        </h1>

        {/* Subtitle - Animated */}
        <p className="text-lg md:text-xl text-[#2f3c28] mb-8 max-w-2xl font-medium
        animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: '1.2s' }}>
          PANCH SHAKTI, where ancient wisdom of Panchagavya meets modern well-being.
        </p>

        {/* Button - Animated */}
        <button className="border-2 border-green-500 text-white px-8 py-4 rounded-full 
        font-bold hover:bg-green-600 hover:border-green-600 transition-all duration-300 flex items-center gap-3
        bg-green-600 shadow-lg hover:shadow-2xl transform hover:scale-105
        animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '1.4s' }}>
          SHOP NOW 
          <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Decorative Text */}
        <div className="mt-16 animate-in fade-in duration-1000" style={{ animationDelay: '1.6s' }}>
          <p className="text-[#3a4a30] text-sm font-semibold tracking-widest">
            ✓ Natural | ✓ Authentic | ✓ Pure
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
    
    </div>
  );
}