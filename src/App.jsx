import About from "./components/About";
import Feedback from "./components/Feedback";
import Milestones from "./components/Milestones";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Starter from "./components/Starter";

function App() {
  return (
    <>
      <Navbar />
      <Starter />
      <Milestones />
      <Feedback />
      <Questions />
      <About />
    </>
  );
}

export default App;
