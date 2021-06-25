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

export default function Collect() {
  const history = useHistory();
  return (
    <div style={divStyle}>
      <Header pageName={"Collect"} mode={"light"} />
      <div className="pt-48">
        <h1 className="text-white font-sans text-6xl ml-48">Own Memories</h1>
        <h1 className="text-white font-sans text-xl mt-4 ml-48 w-1/2">
          Each ticket sold is a digital collectible (NFT) that can be freely
          traded at any time (before and after the event). In addition, tickets
          will be sold in advance as part of the crowd-funding revenue and can
          be returned up till the crowd-funding goal is reached for a full
          refund. In addition one random ticket buyer will be given a mystery
          NFT that may entitle them to special perks at the event itself. In
          addition to this we will have a pre-sale NFT, which can be bid on up
          till the crowd-funding goal is met, a NFT sold during the event
          itself, and one NFT documenting the event itseelf.
        </h1>
      </div>
    </div>
  );
}
