import { lazy, Suspense } from "react";

import { Route, Routes } from "react-router";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
import { Link } from "react-router-dom";

function wait(delay) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, delay);
  });
}

const Home = lazy(() => wait(1000).then(() => import("./Pages/Home.jsx")));
const About = lazy(() => wait(1000).then(() => import("./Pages/About.jsx")));

const Contact = lazy(() =>
  wait(1000).then(() => import("./Pages/Contact.jsx"))
);

const Ikkinchi = lazy(() =>
  wait(1000).then(() =>
    import("./Pages/Home.jsx").then((module) => ({ default: module.Ikkinchi }))
  )
);

import Loader from "./Components/Loader";

function App() {
  // const [messages, setMessages] = useState([]);

  // function handleSendMessage(e) {
  //   e.preventDefault();

  //   let text = e.target[0].value;

  //   setMessages((m) => [...m, { text, id: crypto.randomUUID() }]);

  //   e.target.reset();
  // }

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/ikkinchi">Ikkinchi</Link>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ikkinchi" element={<Ikkinchi />} />
        </Routes>
      </Suspense>
      {/* <form onSubmit={handleSendMessage}>
        <input type="text" />
        <button>Send</button>
      </form>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.text}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
