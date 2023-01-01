import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function PaintingCanvas() {
  // canvas element를 선택하기 위해
  const canvasRef = useRef(null);
  // ctx의 상태는 useState로 관리
  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);

  //마우스 좌표를 담을 배열
  const array = [];

  useEffect(() => {
    // canvasRef를 통해 canvas 요소를 canvas변수에 저장
    const canvas = canvasRef.current;
    // canvas는 2가지 크기를 가진다. 1. drawing buffer 2.화면에 표시되는 크기
    // drawing buffer의 크기 조절
    canvas.width = 500;
    canvas.height = 500;

    // <canvas> 요소는 getContext() 메서드를 이용해서, 랜더링 컨텍스트와 (렌더링 컨텍스트의) 그리기 함수들을 사용할 수 있습니다.
    // getContext() 메서드는 렌더링 컨텍스트 타입을 지정하는 하나의 파라메터를 가집니다.
    // context를 2d로 설정
    const context = canvas.getContext("2d");
    //context 속성 설정
    context.lineJoin = "round";
    context.lineWidth = 5;
    context.strokeStyle = "black";

    setCtx(context);
  }, []);

  //canvas안에 발생하는 event감시
  const canvasEventListener = (event, type) => {
    // canvas안에서  mouse 좌표 구하기
    // canvas 요소의 위치를 옮겼기 때문에 이동시킨만큼 계산해줘야한다. offsetLeft, offsetTop
    let x = event.clientX - ctx.canvas.offsetLeft;
    let y = event.clientY - ctx.canvas.offsetTop;

    if (type === "leave") {
      setIsDrawing(false);
    } else if (type === "down") {
      setIsDrawing(true);
    } else if (type === "up") {
      setIsDrawing(false);
    }

    console.log(isDrawing);
    if (isDrawing && type === "move") {
      if (array.length === 0) {
        array.push({ x, y });
      } else {
        ctx.beginPath();
        // 이동 전 마우스의 좌표
        ctx.moveTo(array[array.length - 1].x, array[array.length - 1].y);
        // 현재 마우스의 좌표
        ctx.lineTo(x, y);
        // 그리기를 마치고 선을 채운다
        ctx.closePath();
        ctx.stroke();
        // 현재 마우스 좌표 저장
        array.push({ x, y });
      }
    }
  };
  return (
    <>
      <Canvas
        ref={canvasRef}
        onMouseDown={(event) => {
          canvasEventListener(event, "down");
        }}
        onMouseMove={(event) => {
          canvasEventListener(event, "move");
        }}
        onMouseLeave={(event) => {
          canvasEventListener(event, "leave");
        }}
        onMouseUp={(event) => {
          canvasEventListener(event, "up");
        }}
      />
    </>
  );
}

export default PaintingCanvas;

const Canvas = styled.canvas`
  width: 500px;
  height: 500px;
  background-color: #fff;
  border: 1px solid #000;
`;
