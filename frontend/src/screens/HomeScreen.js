// import Header from "../components/Header";
import ProductHome from "./ProductHome";
import Slider from "../components/Slider/Slider";


export default function HomeScreen() {
  return (
    <div className="row center">
      <Slider/>
      <ProductHome />
      </div>
  );
}
