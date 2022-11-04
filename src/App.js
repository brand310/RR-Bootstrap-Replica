import "./App.css";
import Background from "./components/Background";
import StoreListings from "./components/StoreListings";
import Topbar from "./components/Topbar.js";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
