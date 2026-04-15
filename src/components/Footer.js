import React from "react";

export default function Footer(props) {
  return (
    <footer
      className={`py-3 mt-auto ${props.mode === "dark" ? "bg-dark" : "bg-light"}`}
    >
      <div className="container text-center">
        <span className={props.mode === "dark" ? "text-light" : "text-muted"}>
          Made with ❤️ by{" "}
          <a
            href="https://soufianehamdach.vercel.app"
            target="_blank"
            rel="noreferrer"
            className={props.mode === "dark" ? "text-light" : "text-dark"}
          >
            Soufiane
          </a>
        </span>
      </div>
    </footer>
  );
}
