import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NumSlidePuzzle from "../pages/NumSlidePuzzle";
import PaintingBoard from "../pages/PaintingBoard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NumSlidePuzzle />} />
        <Route path="/canvas" element={<PaintingBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
