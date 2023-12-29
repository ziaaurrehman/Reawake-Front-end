import React, { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(-1);
  //   const [isMatch, setIsMatch] = useState(-1);

  const toggleAccordion = (index) => {
    if (isOpen === index) {
      return setIsOpen(-1);
    } else {
      setIsOpen(index);
    }
  };
  const data = [
    {
      id: 1,
      title: "Collaborative Work",
      description:
        "The easiest way to create, distribute, and monetize your tasks.",
    },
    {
      id: 2,
      title: "Borderless Tasks Management",
      description:
        "The easiest way to create, distribute, and monetize your tasks.",
    },
    {
      id: 3,
      title: "Instant payment methods",
      description:
        "The easiest way to create, distribute, and monetize your tasks.",
    },
  ];

  return (
    <div className="some_stuff">
      <h1>Some More Important Stuff</h1>
      {data.map((obj, i) => (
        <div
          key={obj.id}
          //   onClick={() => setIsMatch(obj.id)}
          className={`accordion-item ${isOpen === i ? "open" : ""}`}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(i)}>
            <h1 className="">{obj.title}</h1>

            <svg
              className="icon"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 6H11" stroke="black" strokeWidth="2" />

              {isOpen === i ? (
                <path d="M1 6H11" stroke="black" strokeWidth="2" />
              ) : (
                <path d="M6 1V11" stroke="black" strokeWidth="2" />
              )}
            </svg>
          </div>
          <div className="accordion-content">
            <p>{obj.description}</p>
          </div>
          <hr style={{ width: "100%" }} />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
