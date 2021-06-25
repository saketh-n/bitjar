import Header from "../components/header";
import { useHistory } from "react-router-dom";

const bgImg =
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80";
const divStyle = {
  background: `url(${bgImg}) rgba(0, 0, 0, 0.65)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  backgroundBlendMode: "multiply"
};

export default function Landing() {
  const history = useHistory();
  return (
    <div style={divStyle}>
      <Header pageName={"Home"} mode={"light"} />
      <div className="pt-64">
        <h1 className="text-white font-sans text-6xl text-center mr-8">
          Legend
        </h1>
        <h1 className="text-white font-sans text-lg text-center pt-8 mr-8">
          The next generation of parties has arrived
        </h1>
        <div className="ml-72">
          <button className="ml-96 mt-8 text-gray-700 font-sans text-lg bg-indigo-300 rounded-full py-3 px-6 hover:text-gray-200 hover:shadow-lg focus:outline-none focus:shadow-none">
            Sign Up
          </button>
          <button className="ml-8 mt-8 text-gray-700 font-sans text-lg bg-green-400 rounded-full py-3 px-8 hover:text-gray-200 hover:shadow-lg focus:outline-none focus:shadow-none">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
