import React from 'react'
import styled from 'styled-components'

function Navbar() {
    const Container = styled.div`
        margin-top: 2rem;
    `
    const Header = styled.h1`
        font-family: 'Carter One', cursive;
    ` 
    const Image = styled.img`
        border-radius: 2rem;
        width: 12rem;
        height: 12rem;
    `
    return (
        <Container>
            <Image src='https://avatars1.githubusercontent.com/u/49539821?s=460&v=4'/>
            <Header>Jacob Calvino</Header>
        </Container>
    )
}

export default Navbar
