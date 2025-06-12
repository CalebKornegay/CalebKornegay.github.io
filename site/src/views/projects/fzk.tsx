import React from 'react';
import styled from 'styled-components';
import { Margin } from '../../consts';
import Divider from '../../components/divider';
import { FaGithub, FaRust } from 'react-icons/fa6';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 100rem;
  margin: 0px 10px 0px 10px;
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
  border-radius: 250px;
  align-items: center;
  justify-content: center;
  border-color: white;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 5px;
  display: flex;
`;

export default function Fzk() {
  return (
    <Container>
        <Margin />
        <h1>Fzk</h1>
        <h2>Description</h2>
        <div>
            <p>Fzk is an fzf-like TUI application that makes killing pesky applications a breeze.</p>
            <p>Conditional compilation for Windows, MacOS, and Linux makes it portable.</p>
            <p>You can match on process name or PID to make it easier to find.</p>
        </div>
        <Divider />

        <Hotlinks>
            <Hotlink 
                href="https://github.com/calebkornegay/fzk"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub size={25} color="black"/>
            </Hotlink>
            <Hotlink
                href="https://crates.io/crates/fzk"
                target="_blank"
                rel="noreferrer"
            >
                <FaRust size={25} color="black" />
            </Hotlink>
        </Hotlinks>

        <Margin />
        
        <h2>Gallery</h2>
        <h3>Windows</h3>
        <img
        style={{ width: "100%" }}
        src="/fzk_windows_default.png"
        alt="Windows fzk"
        />
        
        <Margin />

        <h3>Linux</h3>
        <img
        style={{ width: "100%" }}
        src="/fzk_linux_default.png"
        alt="Linux fzk"
        />

        <Margin />
    </Container>
  );
}
