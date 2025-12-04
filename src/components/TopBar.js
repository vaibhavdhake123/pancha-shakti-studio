import { Truck, Sparkles } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 text-white text-center py-3 text-sm">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center gap-3">
        {/* Truck Icon */}
        <Truck size={20} className="animate-bounce" />

        {/* Animated Text */}
        <div className="flex items-center gap-2">
          <span className="inline-block">
            Free shipping in Maharashtra above{' '}
            <span className="font-bold animate-pulse">₹1,500</span>
          </span>
          <span className="inline-block">
            <Sparkles size={16} className="inline animate-spin" />
          </span>
          <span className="inline-block">
            & in India above{' '}
            <span className="font-bold animate-pulse">₹2,000</span>
          </span>
        </div>

        <Sparkles size={20} className="animate-bounce" />
      </div>

      {/* Optional: Animated gradient line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse"></div>
    </div>
  );
}