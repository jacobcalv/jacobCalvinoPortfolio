import React from 'react'
import styled from 'styled-components'

function Bio() {
    const Container = styled.div`
        background-color: black;
        height: 20rem;
        font-size: 3rem;
        display: flex;
        justify-content: space-around
    `
    const Who = styled.h2`
        color: white;
        font-family: 'Abril Fatface', cursive;

    `
    const Call = styled.div`
        width: 40%;
        display: flex;
        align-items: center
        height: 100%;
        margin-left: 1rem;
    `
    const Text = styled.div`
        width: 40%;
        display: flex;
        align-items: center
        height: 90%;
        margin-top: 1rem;
        margin-right: 1rem;
        background-color: white;
        border-radius: 2rem;
    `
    const About = styled.p`
        font-family: 'Amatic SC', cursive;
    `
    return (
        <Container>
            <Call>
                <Who>Who Am I?</Who>
            </Call>
            <Text>
                <About>
                    I am a student at Lambda learing full stack web development. Some of my hobbies include photography and art. 
                </About>
            </Text>
        </Container>
    )
}
export default Bio;