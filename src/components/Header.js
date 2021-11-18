// src/components/Title.js

import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: Black;
`;

const Wrapper = styled.section`
background: silver;
border: solid;
border-radius: 8px; 
border-color: black; 
`;

export default function Header() {
    return <Wrapper>
        <Title>Welcome to Narcississtic Numbers!</Title>
        <h4>Open your JS Console</h4>
    </Wrapper>
};
