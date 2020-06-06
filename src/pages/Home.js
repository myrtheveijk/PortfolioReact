import React from 'react';
import { Row } from 'reactstrap';
import { Button } from 'reactstrap';
import { ProjectCard } from '../components/ProjectCard';



export const Home = () => {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <h1>Myr's portfolio</h1>
            <div>
              <a href="#portfolio" title="portfolio"><Button className="btn-header">Check mijn portfolio</Button></a>
              <a href="/about" title="about me"><Button className="btn-header" id="btn-about">Meer over Myrthe</Button></a>
            </div>
          </header>

          <section id="portfolio">
            <h2>Portfolio</h2>
            <h3>Van het ontwerpen en ontwikkelen van een website tot het maken van video's. In mijn portfolio is het te vinden. <br/>Zie hieronder aan welke projecten ik heb gewerkt.</h3>
            <div className="container">
                <Row>
                    <ProjectCard />
                </Row>
              </div>
          </section>
        </div>
      </>
    )
}
