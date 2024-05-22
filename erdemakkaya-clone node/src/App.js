import "./App.css";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Footer from "./components/Footer/Footer.jsx";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";

const images = [
  { src: image1, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image4, alt: "Image 4" },
  { src: image5, alt: "Image 5" },
];

function App() {
  return (
    <>
      <Header />
      <MainContent images={images} />
      <Footer />
    </>
  );
}

export default App;
