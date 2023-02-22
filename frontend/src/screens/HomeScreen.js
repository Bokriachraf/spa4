// import Header from "../components/Header";
import ProductHome from "./ProductHome";
import Slider from "../components/Slider/Slider";
import Carousel from "../components/Carousel/Carousel";


export default function HomeScreen() {
  return (
    <div className="row center">
      <Slider/>
      {/* <Carousel/> */}
      <ProductHome />
      </div>
  );
}
