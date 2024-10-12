import "./App.css";
import Nav from "./assets/Nav";
import HeroSection from "./assets/Hero";
import { BlogTopic } from "./assets/BlogTopic";
import Carousel from "./assets/Carousel";
import Models from "./assets/models";

export default function App() {
  return (
    <div className="w-full home">
      <Nav />
      <HeroSection />
      {/* <BlogTopic /> */}
      <Carousel />
      <Models />
    </div>
  );
}
