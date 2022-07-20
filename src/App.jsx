import About from "./components/About";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Milestones from "./components/Milestones";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Starter from "./components/Starter";

function App() {
  return (
    <>
      <Navbar />
      <Starter />
      <Services />
      <Milestones />
      <About />
      <Feedback />
      <Questions />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
