import "./App.css";
import Nav from "./assets/Nav";
import HeroSection from "./assets/Hero";
import { BlogTopic } from "./assets/BlogTopic";

export default function App() {
  return (
    <div className="w-full home">
      <Nav />
      <HeroSection />
      <BlogTopic />
    </div>
  );
}
