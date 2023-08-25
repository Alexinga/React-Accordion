// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((items, i) => (
        <AccordionItem
          currOpen={currOpen}
          title={items.title}
          num={i + 1}
          onOpen={setCurrOpen}
        >
          {items.text}
        </AccordionItem>
      ))}
      <AccordionItem
        title="Learn React"
        num="43"
        currOpen={currOpen}
        onOpen={setCurrOpen}
      >
        <p>Currently learning how children communicate to each other</p>
      </AccordionItem>
    </div>
  );
}
function AccordionItem({ title, num, onOpen, currOpen, children }) {
  const isOpen = num === currOpen;
  function handleOpenClick() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleOpenClick}>
      <p className="number">0{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
export default App;
