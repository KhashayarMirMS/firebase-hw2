import React from 'react';
import ReactDOM from 'react-dom';
import getCards from './texts';
import './css/main.css';
import './css/materials.css'
import './css/icons.css'

// Content

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

function FirebaseContent(props) {
    return (
        <div id="content" className="features overview">
            <ProjectsGrid />
        </div>
    );
}

// Top Navigation Bar
function RightNav(props) {
    return (
        <ul className="right">
            <li className="medium screen only">
                <div className="view">
                    <i className="material-icons left">remove_red_eye</i>
                    View only
                        </div>
            </li>
            <li className="medium screen only">
                <a className="goToDocs">Go to docs</a>
            </li>
            <li>
                <div className="btn-floating btn-flat transparent waves-light waves-light button">
                    <i className="material-icons">more_vert</i>
                </div>
            </li>
            <li>
                <div className="profile-wrapper">
                    <div className="btn-floating btn-flat transparent waves-effect waves-light waves-circle profile button">
                        <img src="img/profile.svg" alt="profile photo" />
                    </div>
                </div>
            </li>
        </ul>
    );
}

function TopNavigation(props) {
    return (
        <div className="navbar-fixed menu">
            <nav>
                <div class="nav-wrapper">
                    <img src="img/logo.png" alt="logo" className="logo-image big screen only" />
                    <img src="img/logotype.svg" alt="logo type" className="logo-type medium screen only" />
                    <RightNav />
                </div>
            </nav>
        </div>
    );
}

// Side Navigation Bar


// The whole nine yards :D
function Firebase() {
    return (
        <div>
            <TopNavigation />
            <FirebaseContent />
        </div>
    );
}

ReactDOM.render(
    <Firebase />,
    document.body
);