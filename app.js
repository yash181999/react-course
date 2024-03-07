import React from "react";
import ReactDOM from "react-dom";

/* 
    <div id="parent">
        <div id="child">
            <h1></h1>
            <h2></h2>
        </div>
        <div id="child2">
            <h1></h1>
            <h2></h2>
        </div>
    </div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello H1 hkjhk "),
    React.createElement("h2", {}, "I am H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello child 2 H1"),
    React.createElement("h2", {}, "I am child 2  H2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  {
    id: "hello",
    att: "att",
  },
  "hello world from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
