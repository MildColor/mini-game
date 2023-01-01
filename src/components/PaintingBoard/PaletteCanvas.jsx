import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function PaletteCanvas() {
  const paletteCanvas = useRef(null);
  const [ctx, setCtx] = useState();

  //마우스 좌표를 담을 배열
  const array = [];

  useEffect(() => {
    const palette = paletteCanvas.current;
    palette.width = 152;
    palette.height = 152;

    const context = palette.getContext("2d");
    const gradient = context.createConicGradient(0, 76, 76);
    gradient.addColorStop(0, "#000000");
    gradient.addColorStop(0.1, "#FF0000");
    gradient.addColorStop(0.18, "#800000");
    gradient.addColorStop(0.27, "#808000");
    gradient.addColorStop(0.36, "#00FF00");
    gradient.addColorStop(0.45, "#008000");
    gradient.addColorStop(0.54, "#00FFFF");
    gradient.addColorStop(0.63, "#008080");
    gradient.addColorStop(0.72, "#0000FF");
    gradient.addColorStop(0.81, "#000080");
    gradient.addColorStop(0.89, "#FF00FF");
    gradient.addColorStop(1, "#800080");

    context.beginPath();
    context.arc(76, 76, 76, 0, Math.PI * 2);
    context.stroke();

    context.fillStyle = gradient;
    // context.fillRect(0, 0, palette.width, palette.height);
    context.fill();
    setCtx(context);

    return () => {};
  }, []);

  const palettEventListener = (event) => {
    let x = event.clientX - ctx.canvas.offsetLeft;
    let y = event.clientY - ctx.canvas.offsetTop;
    const pickColor = event.target.style.backgroundColor;
    console.log(pickColor);
  };

  return (
    <>
      <Palette
        ref={paletteCanvas}
        onMouseDown={(event) => {
          palettEventListener(event);
        }}
      />
      <input type="color" />
    </>
  );
}

export default PaletteCanvas;

const Palette = styled.canvas`
  width: 149px;
  height: 149px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #000;
`;
