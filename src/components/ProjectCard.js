import React from 'react';
import { Col, Card, CardImg, CardSubtitle, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import Roduo from '../img/CoverRoduo.jpeg';
import Mobo from '../img/CoverMobo.jpeg';
import Hdg from '../img/CoverHdg.jpeg';

const ProjectsData = [
    {
        "img" : Roduo,
        "title" : "Roduo",
        "subtitle" : "Webdesign | Front-end | Promotievideo",
        "text" : "Roduo is een spel voor de echte cowboys & cowgirls tussen de 6 en 8 jaar oud. Durf jij de uitdaging aan te gaan?",
        "link" : "https://myrthevaneijk.myportfolio.com/roduo"
    },
    {
        "img" : Mobo,
        "title" : "Mobo",
        "subtitle" : "Stijlgids | Webdesign | Front-end",
        "text" : "Tijdens het fietsen verbruik je veel energie. Wat nou als deze energie op een mooie, handige manier gebruikt kan worden?",
        "link" : "https://myrthevaneijk.myportfolio.com/mobo"
    },
    {
        "img" : Hdg,
        "title" : "Hotel De Gravin",
        "subtitle" : "Webdesign | Front-end | Back-end",
        "text": "Een hotel runnen dat is niet niets! Je moet daarbij ook denken aan het plannen van bijvoorbeeld het personeel. Wie werkt wanneer?",
        "link" : "https://myrthevaneijk.myportfolio.com/hotel-de-gravin"
    }
]

export const ProjectCard = () => {

    return ProjectsData.map((ProjectData, index) => (
        <>
            <Col md={4}>
                <Card>
                    <CardImg top width="30%" src={ProjectData.img} alt={ProjectData.title} />
                    <CardBody>
                        <CardTitle>{ProjectData.title}</CardTitle>
                        <CardSubtitle>{ProjectData.subtitle}</CardSubtitle>
                        <CardText>{ProjectData.text}</CardText>
                        <a href= {ProjectData.link} title={ProjectData.title} target="_blank"><Button className="btn-pf">Bekijk project</Button></a>
                    </CardBody>
                </Card>
            </Col>
        </>
    ))
}
