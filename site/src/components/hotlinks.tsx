import React from 'react';
import styled from 'styled-components';
import type { hotlink } from '../consts';
import { hotlinks } from '../consts';

const Container = styled.div`
    height: 2em;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default function Hotlinks() {
  return (
    <Container>
        {hotlinks.map((item: hotlink) => {
            const Icon = item.icon;
            return (
                <a href={item.resource}>
                    <Icon size={24} />
                </a>
            );
        })}
    </Container>
  );
}
