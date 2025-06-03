import React from "react";
import styled from "styled-components";
import { homelinks } from "../consts";
import type { homelink } from "../consts";
import { NavLink } from "react-router";

const Container = styled.div`
  position: fixed;
  top: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  border-style: solid;
  border-width: 1px;
  padding: 5px 15px 5px 15px;
  height: 1.75em;
  border-radius: 15px;
  border-color: white;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  width: 95%;
  @media only screen and (min-width: 500px) {
    max-width: 35em;
  }
`;

const Header = styled(NavLink)`
  color: black;
  text-align: center;
  text-decoration: none;
`;

export default function HomeNavBar() {
  return (
    <Container>
      {homelinks.map((link: homelink) => (
        <Header to={{ pathname: "/", hash: link.href }}>{link.name}</Header>
      ))}
    </Container>
  );
}
