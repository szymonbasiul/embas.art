import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";


export default function Home() {
  return (
    <div className="container">
      <Header />
      <SectionOne />
      <SectionTwo />
      <Footer/>
    </div>
  );
}
