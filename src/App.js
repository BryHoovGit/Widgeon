import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const App = () => {
  const items = [
    {
      title: "What is React?",
      content: "React is a front-end Javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is a favorite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];

  const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "A Shade of Blue",
      value: "blue",
    },
  ];

  const [selected, setSelected] = useState(options[0]);

  const showAccordion = () => {
    if (window.location.pathname === "/") {
      return <Accordion items={items} />;
    }
  };

  const showSearch = () => {
    if (window.location.pathname === "/search") {
      return <Search />;
    }
  };

  const showDropdown = () => {
    if (window.location.pathname === "/color") {
      return (
        <div>
          <Dropdown
            label="Select a Color"
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
            isColor={true}
          />
          <h2
            style={{ color: selected.value }}
          >{`This text is ${selected.value}`}</h2>
        </div>
      );
    }
  };

  const showTranslate = () => {
    if (window.location.pathname === "/translate") {
      return <Translate />;
    }
  };

  return (
    <div>
      {showAccordion()}
      {showSearch()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};

export default App;
