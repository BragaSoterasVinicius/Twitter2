import CenterBar from "./components/CenterBar";
import NewsBar from "./components/NewsBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="sides" style={{ textAlign: "center" }}>
      <SideBar />
      <CenterBar />
      <NewsBar />
    </div>
  );
}

export default App;
