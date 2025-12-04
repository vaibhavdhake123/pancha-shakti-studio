import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(https://rkmshospitalvrindavan.rkmm.org/Ayurveda.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-top-8 duration-1000">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '0.3s' }}>
            We'd love to hear from you. Let's connect!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h2 className="text-3xl font-bold text-green-700 mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

            <form className="space-y-5">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-bold 
                hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                flex items-center justify-center gap-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
            <h2 className="text-3xl font-bold text-green-700 mb-8">Contact Information</h2>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg mb-6 border-l-4 border-green-600 hover:shadow-lg transition-all duration-300 transform hover:translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-full text-white mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@panchshakti.com</p>
                  <p className="text-gray-600">support@panchshakti.com</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg mb-6 border-l-4 border-green-600 hover:shadow-lg transition-all duration-300 transform hover:translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-full text-white mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 98765 43211</p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-600 hover:shadow-lg transition-all duration-300 transform hover:translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-full text-white mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">
                    Panch Shakti Headquarters<br />
                    Kolhapur, Maharashtra<br />
                    India - 416001
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg mt-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-800 mb-3">Business Hours</h3>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM<br />
                <span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM<br />
                <span className="font-semibold">Sunday:</span> Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}