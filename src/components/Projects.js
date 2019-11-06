import React from 'react'
import styled from 'styled-components'
import Nasa from '../images/nasaphotoofday.jpg'
import CarSales from '../images/carSales.jpg'
import SinglePageApp from '../images/singlePageApp.jpg'
import HarvardArt from '../images/HarvardArt.jpg'
function Projects() {
    const ProjectHeader = styled.h1`
        font-family: 'Carter One', cursive;
        font-size: 2.5rem;
    `
    const ProjectContainer = styled.div`
        display:flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
    `
    const Project = styled.div`
        width: 20rem;
        border: 2px solid black;
        height: 20rem;
        border-radius: 2rem;
        padding: 1rem;
    `
    const ProjectTitle = styled.a`
        font-family: 'Abril Fatface', cursive;
        font-size: 1.5rem;
        color: black;
        
    `
    const ProjectImage = styled.img`
        width: 80%;
        height: 60%;
        margin-top: 1rem;
    `
    const ProjectDescription = styled.p`

    `
    return (
        <div>
            <ProjectHeader>My Projects</ProjectHeader>
            <ProjectContainer>
                <Project>
                    <ProjectTitle href='http://nifty-boyd-e121e4.netlify.com/'>Nasa Photo Of the Day</ProjectTitle>
                    <ProjectImage src={Nasa}/>
                    <ProjectDescription>A react app utilizing the Nasa Photo of The Day API </ProjectDescription>
                </Project>
                <Project>
                    <ProjectTitle href='https://car-sales-nine-kappa.now.sh/'>Car Sales</ProjectTitle>
                    <ProjectImage src={CarSales}/>
                    <ProjectDescription>A car sales project that used Redux to store state of the automobile features and prices.</ProjectDescription>
                </Project>
                <Project>
                    <ProjectTitle href='https://sprint-challenge-single-page-apps-five-omega.now.sh/'>A Single Page Application</ProjectTitle>
                    <ProjectImage src={SinglePageApp}/>
                    <ProjectDescription>This project diplayed my ability to use react and react-router-dom to make a single page application.</ProjectDescription>
                </Project>
                <Project>
                    <ProjectTitle href='https://zeit.co/jacobcalvino/react-redux-app/arvp9wly3'>React Redux App</ProjectTitle>
                    <ProjectImage src={HarvardArt}/>
                    <ProjectDescription>This is a project that was made using react and redux using the Harvard Art API.</ProjectDescription>
                </Project>
            </ProjectContainer>
        </div>
    )
}

export default Projects
