import React from "react";
import styled from "styled-components";

const DividerInternal = styled.div`
  background-color: grey;
  opacity: 20%;
  height: 10rem;
  width: 3px;
  margin-top: 2em;
  margin-bottom: 3em;
`;

export default function Divider() {
  return <DividerInternal />;
}
