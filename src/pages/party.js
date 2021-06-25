import Header from "../components/header";
import { useHistory } from "react-router-dom";

const divStyle = {
  background: `rgba(0, 0, 0, 1)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  backgroundBlendMode: "multiply"
};

export default function Party() {
  const history = useHistory();
  return (
    <div style={divStyle}>
      <Header pageName={"Party"} mode={"light"} />
      <div className="pt-48">
        <h1 className="text-white font-sans text-6xl ml-48">About</h1>
        <h1 className="text-white font-sans text-xl mt-4 ml-48 w-2/5">
          The advent of information technology has changed the way we organize,
          promote and document parties but has yet to change parties themselves.
          Our goal at Legend is to help bring more parties into the digital age,
          whether that be through digital tools to help break the ice, or
          bringing more of the fun and grandeur of MMORPGs to an in person
          setting, we feel that there is a vast design space to make parties at
          least an order of magnitude more fun.
        </h1>
      </div>
    </div>
  );
}
