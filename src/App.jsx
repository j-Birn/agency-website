import About from "./components/About";
import Feedback from "./components/Feedback";
import Milestones from "./components/Milestones";
import Navbar from "./components/Navbar";
import Starter from "./components/Starter";

function App() {
  return (
    <>
      <Navbar />
      <Starter />
      <Milestones />
      <Feedback />
      <About />
    </>
  );
}

export default App;
