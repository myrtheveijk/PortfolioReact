import React from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/Card';

export const Home = () => {
    return (
        <div className="App">

       <Header/>

      <header className="App-header">
        <h1>Myrthe van Eijk</h1>
        <div>
          <button className="btn btn-danger">Portfolio</button>
          <button className="btn btn-warning">About me</button>
        </div>
      </header>

      <section>
          <h2>Portfolio</h2>
          <p>Projecten waaraan ik gewerkt heb...</p>
          <div className="container">
            <Card/>
          </div>
      </section>
    </div>
    )
}
