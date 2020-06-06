import React from 'react'; 
import { Container, Row, Col } from 'reactstrap'; 
import Profielfoto from '../img/myrthepf.jpeg';

export const About = () => {
    
    return (
        <>
            <div className="App-header header-page">
                <h1>Meer Over Myr</h1>
            </div>   

            <Container>
                <Row>
                    <Col className="col-about">
                        <img src={Profielfoto} id="pf-img" alt="Profielfoto"/>
                    </Col>
                    <Col className="col-about">
                        <h2>Howdy!</h2>
                        <p>
                            Ik ben Myrthe, 21 jaar en kom uit Monster. In mijn vrije tijd spreek ik 
                            graag met vrienden af, speel ik gitaar en luister ik naar Dolly Parton, 
                            Red Hot Chili Peppers en Iron Maiden.
                        </p>
                        <p>
                            Momenteel zit ik in het tweede leerjaar van de opleiding Creative Media 
                            and Game Technologies aan de Hogeschool Rotterdam. In de afgelopen 
                            twee jaar heb ik les gehad in ontwerpen en programmeren. In deze tijd 
                            ben ik erachter gekomen dat ik het belangrijk vind om met het totale 
                            proces bezig te zijn. Ik vind het namelijk interessant om bij alle 
                            onderdelen van het proces betrokken te zijn.
                        </p>
                        <p>
                            Tijdens mijn vorige opleiding op het Grafisch Lyceum Rotterdam heb ik 
                            stage gelopen bij JEM-id in Honselersdijk. Wat mij voornamelijk aansprak 
                            bij JEM-id was de professionele werkwijze, met daarbij een gezellige, 
                            informele sfeer. Dit bedrijf beviel mij zo goed dat ik hier ook na mijn 
                            stage ben blijven werken.
                        </p>
                        <p>Wil je meer over mij weten?</p>
                        <a href="/contact" className="btn-link" title="Contact">Stuur mij dan een bericht!</a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
