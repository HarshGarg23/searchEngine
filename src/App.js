import Imagegrid from "./components/Imagegrid";
import Title from "./components/Title";
import Uploadform from "./components/Uploadform";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <Uploadform/>
      <Imagegrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
