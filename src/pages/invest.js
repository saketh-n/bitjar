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

export default function Invest() {
  const history = useHistory();
  return (
    <div style={divStyle}>
      <Header pageName={"Invest"} mode={"light"} />
      <div className="pt-48">
        <h1 className="text-white font-sans text-6xl ml-48">
          Prove Your Belief
        </h1>
        <h1 className="text-white font-sans text-xl mt-4 ml-48 w-1/2">
          If you truly believe in the success of a party, you now have a way to
          prove it and have some skin in the game through purchasing shares of
          party revenue. All revenue from a party is split proportionally
          amongst shareholders at party conclusion. In addition to people being
          rewarded for their faith, this also serves as an alternative to
          crowd-funding as it promises more return for funders, hopefully
          allowing more people to raise capital and to raise more capital for
          bigger events.
        </h1>
      </div>
    </div>
  );
}
