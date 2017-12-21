import React from 'react';
import ReactDOM from 'react-dom';
import { getCards, getNavigationItems } from './texts';
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
    const classes = 'content features overview' + (props.navIsExpanded ? '' : ' expanded');
    return (
        <div id="content" className={classes}>
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
                        <img src="img/profile.svg" alt="profile" />
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
                <div className="nav-wrapper">{'\n'}
                    <img src="img/logo.png" alt="logo" className="logo-image big screen only" />{'\n'}
                    <img src="img/logotype.svg" alt="logo type" className="logo-type medium screen only" />{'\n'}
                    <RightNav />
                </div>
            </nav>
        </div>
    );
}

// Side Navigation Bar
function OverviewNavigationItem(props) {
    return (
        <li className="nav-item " id="overview">
            <a id="overview-a" href="#">
                <div className="c5e-nav-item-lockup" id="overview-div" style={{ height: '36px' }}>
                    <svg viewBox="0 0 20 20" style={{ margin: 'auto' }}>
                        <path fill="#039be5" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z">
                        </path>
                    </svg>
                    <span className="c5e-entry-displayname" id="overview-text">{'\n'}
                        Overview{'\n'}
                    </span>
                </div>
            </a>
            <span className="dropdown-button" id="overview-btn" data-activates="dropdown1">{'\n'}
                <svg viewBox="0 0 22 22" style={{ height: '18px', width: '24px', paddingLeft: '3px' }}>{'\n'}
                    <path fill="#737373" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
                    </path>{'\n'}
                </svg>{'\n'}
            </span>
        </li>
    );
}

function NavigationHeader(props) {
    return (
        <div className="c5e-nav-heading" id={props.id}>{props.text}</div>
    );
}

function NavigationItem(props) {
    return (
        <li className="nav-item" {...props.extraAttributes}>{'\n'}
            <a href="#" {...props.aExtraAttributes}>{'\n'}
                <svg className="svg" viewBox={props.viewBox}>{'\n'}
                    <path fill="#737373" d={props.d}></path>{'\n'}
                </svg>{'\n'}
                <span className="c5e-entry-displayname">{props.span}</span>
            </a>
        </li>
    );
}

function NavigationDivider(props) {
    return (
        <li className="divider" id={props.id}></li>
    );
}

function MainNavigation(props) {
    const details = getNavigationItems();
    const navigationItems = details.map((item) => {
        if (item.itemType === 'item') {
            return <NavigationItem key={item.key} extraAttributes={item.extraAttributes} aExtraAttributes={item.aExtraAttributes} viewBox={item.viewBox} d={item.d} span={item.span} />;
        } else if (item.itemType === 'header') {
            return <NavigationHeader key={item.key} id={item.id} text={item.text} />;
        }
        else {
            return <NavigationDivider key={item.key} id={item.id} />;
        }
    });

    return (
        <div className="side-nav fixed" id="side-navbar">
            <div>
                <ul style={{ margin: '0px' }}>
                    <OverviewNavigationItem key="overview" />{'\n'}
                    {navigationItems}
                </ul>
            </div>
        </div>
    );
}

function PremiumStatus(props) {
    return (
        <div className="side-nav fixed" id="side-navbar1" style={{ lineHeight: '16px' }}>
            <div layout="column" flex="" className="layout-column flex" style={{ display: 'inline' }}>
                <div className="side-nav-div-amongdiv">{'\n'}
                    Sark{'\n'}
                </div>{'\n'}
                <a id="upgrade-a" href="#" className="right">{'\n'}
                    <strong>{'\n'}
                        UPGRADE
                    </strong>{'\n'}
                </a>{'\n'}
                <div className="side-nav-div-amongdiv" style={{ fontSize: '12px' }}>{'\n'}
                    <span>{'\n'}
                        <br /> Free{'\n'}
                    </span>{'\n'}
                    $0/month{'\n'}
                </div>
            </div>
        </div>
    );
}

class ExpandButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggle();
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    }

    render() {
        return (
            <button className="right side-nav fixed" id="side-navbar2" style={{ lineHeight: '16px', padding: '10px 16px', backgroundColor: 'white', border: 'none', height: '44px' }}
                onClick={this.handleClick}>{'\n'}
                <svg id="side-navbar2-svg" className="right" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">{'\n'}
                    <path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />{'\n'}
                </svg>{'\n'}
            </button>
        );
    }
}

function SideNavigation(props) {
    const classes = 'nav-wrapper' + (props.navIsExpanded? ' expanded': '');

    return (
        <div className={classes} style={{ position: 'fixed' }}>
            <MainNavigation />
            <PremiumStatus />
            <ExpandButton toggle={props.toggle} />
        </div>
    );
}

// The whole nine yards :D
class Firebase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navIsExpanded: true
        };

        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    toggleNavigation() {
        this.setState(prevState => ({
            navIsExpanded: !prevState.navIsExpanded
        }));
    }

    render() {
        return (
            <div>
                <TopNavigation />
                <SideNavigation toggle={this.toggleNavigation} navIsExpanded={this.state.navIsExpanded} />
                <FirebaseContent navIsExpanded={this.state.navIsExpanded} />
            </div>
        );
    }
}

ReactDOM.render(
    <Firebase />,
    document.getElementById('FirebaseApp')
);