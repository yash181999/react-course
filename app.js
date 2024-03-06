/* 
    <div id="parent">
        <div id="child">
            <h1></h1>
        </div>
    </div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello H1")
  )
);

const heading = React.createElement(
  "h1",
  {
    id: "hello",
    att: "att",
  },
  "hello world from React"
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
