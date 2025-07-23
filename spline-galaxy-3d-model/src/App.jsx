import StarsCanvas from "./components/StarBackground";
import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="bg-[#030014] overflow-y-scroll overflow-x-hidden h-screen relative">
      <StarsCanvas />
      <div className="h-full w-full text-white">
        <Spline scene="https://prod.spline.design/NIY6Evv2TH3yzF12/scene.splinecode" />
      </div>
    </div>
  );
}

export default App;
