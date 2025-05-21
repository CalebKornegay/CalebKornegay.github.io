import React from 'react';
import styled from 'styled-components';
import type { hotlink } from '../consts';
import { hotlinks } from '../consts';

const Container = styled.div`
    height: 3em;
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Hotlink = styled.a`
    height: 2.5em;
    width: 2.5em;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: white;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export default function Hotlinks() {
  return (
    <Container>
        {hotlinks.map((item: hotlink) => {
            const Icon = item.icon;
            return (
                <Hotlink href={item.resource} target="_blank" rel="noreferrer">
                    <Icon color={item.icon_color} size={20} />
                </Hotlink>
            );
        })}
    </Container>
  );
}
