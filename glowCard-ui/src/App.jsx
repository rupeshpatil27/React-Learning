import React from "react";


const App = () => {

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", handleMouseMove);
  });

  function handleMouseMove(e) {
    const rect = this.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    this.style.setProperty("--start", angle + 60);
  }

  return (
    <div className="bg-black flex flex-row items-center justify-center p-10">
      {/* <GlowingCard />
      <GlowingCard />
      <GlowingCard /> */}

      <div className="card">
        <div className="glow"></div>
        <h1>01</h1>
        <p>Move your mouse cursor over the card.</p>
      </div>
      <div className="card">
        <div className="glow"></div>
        <h1>02</h1>
        <p>Move your mouse cursor over the card.</p>
      </div>
      <div className="card">
        <div className="glow"></div>
        <h1>03</h1>
        <p>Move your mouse cursor over the card.</p>
      </div>
    </div>
  );
};

export default App;
