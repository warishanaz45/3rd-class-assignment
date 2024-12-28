import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const About = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", margin: "20px" }}>About Us</h1>
      <p style={{ textAlign: "center" }}>This is the About page of our Next.js App.</p>
      <Footer />
    </div>
  );
};

export default About;
