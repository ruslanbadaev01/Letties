import React from "react";
import lottie from "lottie-web";
import reactLogo from "./lotties/typing.json";

const classLetti = {
  width: 200,
  height: 200,
  overflow: "hidden",
};

const flex = {
  display: "flex",
  justifyContent: "center",
};

export default function App() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo,
    });
  }, []);

  return (
    <div style={flex}>
      <div id="react-logo" style={classLetti} />
    </div>
  );
}
