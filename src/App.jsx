import Card from "./components/card/Card";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import People from "./components/people/People";
import Products from "./components/products/Products";
import "./sass/global.scss";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Card />
      <Products />
      <People />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
