import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import CoverMobo from '../img/CoverMobo.jpeg';


export const Home = () => {
    return (
      <>
        <div className="App">

          <Header/>

          <header className="App-header">
            <h1>Myrthe van Eijk</h1>
            <div>
              <a href="#portfolio" title="portfolio"><button className="btn btn-dark">Portfolio</button></a>
              <a href="/about" title="about me"><button className="btn btn-success">About me</button></a>
            </div>
          </header>

          <section id="portfolio">
            <h2>Portfolio</h2>
            <p>Projecten waaraan ik gewerkt heb...</p>
            <div className="container">
                <Row>
                  <Col>
                    <Card>
                      <CardImg top width="100%" src={ CoverMobo } alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
          </section>

          <Footer />
        </div>
      </>
    )
}
