import { useState } from "react";
import "./App.css";
import "./index.css";


export default function App() {
  const [level, setLevel] = useState(1);
  const [size, setSize] = useState(200);

  //ให้อาหาร
  const foodPig = (foodValue) => {
    setLevel((prevLevel) => {
      const newLevel = prevLevel + foodValue;
      if (newLevel <= 120) {
        setSize((prevSize) => prevSize + foodValue/10);
      }
      return newLevel;
    });
  };

  const getPigImage = () => {
    if (level < 100) {
      return "https://i.imgur.com/9kMdbFY.jpeg";
    } else {
      return "https://i.imgur.com/ptlUFWh.jpeg";
    }
  };
  const imageSrc = `${getPigImage()}?t=${Date.now()}`;

  const reset = () => {
    setLevel(1);
    setSize(200); //รีเกม
  };

  return (
    <>
      <div>
        <h1>Let's raise Moo Deng!!!!</h1>
      </div>
      <div class="image-with-border" >
      <div class="container">
        <div>
          <h2>Level {level}</h2>
        </div>
        <div className="pig">
          <img
            src={imageSrc}
            alt="หมูเด้ง"
            style={{ width: size, height: size }}
          />
        </div>

        <div className="food" class="image-row">
          <img
            src="https://i.imgur.com/tbISy4h.png"
            alt="แตงโม"
            onClick={() => foodPig(5)}
          />
          <img
            src="https://i.imgur.com/66TI23C.png"
            alt="ฟักทอง"
            onClick={() => foodPig(10)}
          />
          <img
            src="https://i.imgur.com/AB6ELIv.png"
            alt="หญ้า"
            onClick={() => foodPig(20)}
          />
        </div>

        <div className="button">
          <button onClick={reset}>Reset</button>
        </div>
        </div>
      </div>
    </>
  );
}
