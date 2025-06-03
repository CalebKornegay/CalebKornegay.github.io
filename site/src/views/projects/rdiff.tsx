import React from "react";
import { Margin } from "../../consts";
import styled from "styled-components";
import { FaGithub, FaRust } from "react-icons/fa6";
import Divider from "../../components/divider";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 100rem;
`;

const Hotlinks = styled.div`
  height: 3em;
  width: 15rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 25px;
`;

const Hotlink = styled.a`
  height: fit-content;
  padding: 5px;
  border-radius: 250px;
  align-items: center;
  justify-content: center;
  border-color: white;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  display: flex;
`;

export default function Rdiff() {
  React.useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Margin />
      <h1>Rdiff</h1>
      <h2>Description</h2>
      <div>
        <p>
          Rdiff is a terminal user interface (TUI) for viewing the differences
          between 2 files.
        </p>
        <p>
          It supports syntax highlighting of many languages by leveraging the
          Syntect crate.
        </p>
        <p>It is written completely in Rust, view the source code below!</p>
      </div>
      <Divider />

      <Hotlinks>
        <Hotlink
          href="https://github.com/calebkornegay/rdiff"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub size={25} color="black" />
        </Hotlink>
        <Hotlink
          href="https://crates.io/crates/rdiff3"
          rel="noreferrer"
          target="_blank"
        >
          <FaRust size={25} color="black" />
        </Hotlink>
      </Hotlinks>
      <Margin />

      <h2>Gallery</h2>
      <img
        style={{ width: "50%" }}
        src="/rdiff.png"
        alt="2 files being diffed"
      />

      <Margin />
    </Container>
  );
}
