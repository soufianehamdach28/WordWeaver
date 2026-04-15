import React from "react";

export default function About(props) {
  const itemStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  const accordionItems = [
    {
      id: "one",
      title: "Analyze Your Text",
      body:
        "WordWeaver gives you a simple, fast, and privacy-friendly way to analyze and transform your text — no sign-up required.",
    },
    {
      id: "two",
      title: "Free to Use",
      body:
        "It is completely free to use. No credit cards required. Use as much as you want!",
    },
    {
      id: "three",
      title: "Browser Compatible",
      body:
        "WordWeaver works in all modern browsers including Chrome, Firefox, Safari, and Edge.",
    },
  ];

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 className="my-3">About WordWeaver</h1>
      <div className="accordion" id="accordionAbout">
        {accordionItems.map((item, index) => (
          <div className="accordion-item" style={itemStyle} key={item.id}>
            <h2 className="accordion-header" id={`heading-${item.id}`}>
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                style={itemStyle}
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${item.id}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse-${item.id}`}
              >
                <strong>{item.title}</strong>
              </button>
            </h2>
            <div
              id={`collapse-${item.id}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`heading-${item.id}`}
              data-bs-parent="#accordionAbout"
            >
              <div className="accordion-body">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
