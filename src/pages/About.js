import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4 text-green-700">About Us</h1>
        <p className="text-gray-700 leading-relaxed">
          Welcome to Panchshakti — where ancient Panchagavya science meets modern wellness.
        </p>
      </div>

      <Footer />
    </div>
  );
}
