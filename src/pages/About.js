import { Leaf, Heart, Shield, Star, Award, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Background */}
      <div
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(https://rkmshospitalvrindavan.rkmm.org/Ayurveda.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-top-8 duration-1000">
            About Panch Shakti
          </h1>
          <p
            className="text-xl text-gray-100 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000"
            style={{ animationDelay: "0.3s" }}
          >
            Ancient wisdom meets modern wellness for your healthy lifestyle
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-20">
        {/* Introduction Section */}
        <div className="mb-20 animate-in fade-in slide-in-from-left-8 duration-1000">
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            Welcome to Panchshakti
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Welcome to Panchshakti — where ancient Panchagavya science meets
            modern wellness. We are dedicated to bringing the timeless benefits
            of traditional Ayurvedic knowledge to your everyday life through
            pure, authentic, and natural products.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to provide you with the highest quality wellness
            solutions that honor ancient traditions while embracing modern
            scientific research and innovation.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-green-700 mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 - Natural */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Leaf size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-3">
                Natural
              </h3>
              <p className="text-gray-700">
                We believe in the power of nature. All our products are made
                from pure, natural ingredients without harmful chemicals or
                additives.
              </p>
            </div>

            {/* Value 2 - Authentic */}
            <div
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-in fade-in slide-in-from-bottom-8 duration-1000"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-3">
                Authentic
              </h3>
              <p className="text-gray-700">
                We honor the traditional Panchagavya science while ensuring
                every product meets modern quality and safety standards.
              </p>
            </div>

            {/* Value 3 - Pure */}
            <div
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-in fade-in slide-in-from-right-8 duration-1000"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-3">Pure</h3>
              <p className="text-gray-700">
                Purity is our promise. We maintain the highest standards in
                sourcing, manufacturing, and testing to ensure product
                excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-green-700 mb-12 text-center">
            Why Choose Panch Shakti
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="flex gap-4 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="bg-green-600 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <Award size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Certified Quality
                </h3>
                <p className="text-gray-700">
                  All products are certified and tested by authorized
                  laboratories for safety and efficacy.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex gap-4 animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="bg-green-600 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <Star size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Expert Knowledge
                </h3>
                <p className="text-gray-700">
                  Our team includes Ayurvedic experts and wellness specialists
                  dedicated to your health.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div
              className="flex gap-4 animate-in fade-in slide-in-from-left-8 duration-1000"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-green-600 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <Users size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Community Driven
                </h3>
                <p className="text-gray-700">
                  Join thousands of satisfied customers who trust Panch Shakti
                  for their wellness journey.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div
              className="flex gap-4 animate-in fade-in slide-in-from-right-8 duration-1000"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-green-600 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <Leaf size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Sustainable Practices
                </h3>
                <p className="text-gray-700">
                  We are committed to environmental sustainability and
                  eco-friendly manufacturing processes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-12 rounded-xl mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-4xl font-bold text-green-700 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Panch Shakti was founded with a simple vision — to bring the
            transformative power of Panchagavya (five products of the cow) to
            modern wellness seekers. Rooted in ancient Ayurvedic traditions, we
            believe that nature has provided us with everything we need for
            optimal health and well-being.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, we continue to innovate and expand our product range while
            staying true to our core values of authenticity, purity, and natural
            wellness.
          </p>
        </div>

        {/* Call to Action */}
        <div
          className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join Our Wellness Journey
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the difference that pure, natural, authentic Panchagavya
            products can make in your life.
          </p>
          <button
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-bold 
          hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Explore Our Products
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
