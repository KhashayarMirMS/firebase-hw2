import React from 'react';
import ReactDOM from 'react-dom';
import getCards from './texts';
import './css/main.css';
import './css/materials.css'
import './css/icons.css'

function Title(props) {
    return (
        <div className="title">{props.text}</div>
    );
}

function Content(props) {
    return (
        <div className="content">
            <Title text={props.title} />
            <div className="description">{props.description}</div>
        </div>
    );
}

function LearnMore(props) {
    return (
        <a target="_blank" className="learn more" href={props.href}> Learn more</a>
    );
}

function GetStarted(props) {
    return (
        <button className="get started" type="button"> Get started </button>
    );
}

function BannerImage(props) {
    return (
        <div className="banner image">
            <img src={props.src} alt={props.src} />
        </div>
    );
}

function Card(props) {
    return (
        <div className="card">
            <BannerImage src={props.banner} />
            <Content title={props.title} description={props.description} />
            <div className="links">
                <LearnMore href={props.learnMore} />
                <GetStarted />
            </div>
        </div>
    );
}

function Projects(props) {
    const cards = getCards();
    const cardsList = cards.map((card) => <Card key={card.key} banner={card.banner} title={card.title} description={card.description} learnMore={card.learnMore} />);
    return (
        <div className="projects">
            {cardsList}
        </div>
    );
}

function ProjectsGrid(props) {
    return (
        <div className="grid">
            <Title text="Discover Firebase" />
            <Projects />
        </div>
    );
}

ReactDOM.render(
    <ProjectsGrid />,
    document.getElementById('content')
);