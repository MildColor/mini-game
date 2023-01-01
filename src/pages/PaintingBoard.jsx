import React from "react";
import Layout from "../components/Layout/Layout";
import Stack from "../components/Elem/Stack";
import PaintingCanvas from "../components/PaintingBoard/PaintingCanvas";
import PaletteCanvas from "../components/PaintingBoard/PaletteCanvas";
import styled from "styled-components";

function PaintingBoard() {
  return (
    <Layout>
      <Stack direction="column">
        <PaintingCanvas />
        <StOptionsDiv>
          <PaletteCanvas />
        </StOptionsDiv>
      </Stack>
    </Layout>
  );
}

export default PaintingBoard;

const StOptionsDiv = styled.div`
  margin-top: 20px;
`;
