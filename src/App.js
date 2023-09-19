import About from "./components/about/About";
import Intro_name from "./components/intro/Intro_name";
import ProductList from "./components/productList/ProductList";

const App = () => {
  return (
    <div>
      <Intro_name />
      <About />
      <ProductList />
    </div>
  );
};

export default App;
