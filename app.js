const heading = React.createElement(
  "h1",
  {
    id: "hello",
    att: "att"
  },
  "hello world from React"
);
console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
