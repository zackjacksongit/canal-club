import React, { Component } from 'react';
import { Element } from 'react-scroll';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import 'normalize.css';
import './styles/App.scss';

import Header from './components/Header';
import Featured from './components/Featured';
import EventInfo from './components/EventInfo';
import Latest from './components/Latest';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';

library.add(faEnvelope, faFacebookF, faTwitter, faInstagram);

class App extends Component {
  state = {
    drawerOpen: false,
    headerVisible: false,
    faqOpen: false,
    menuOpen: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // If user scrolls down, then the
    // header background is visible
    if (window.scrollY > 0) {
      this.setState({
        headerVisible: true
      });
    }

    // If user scrolls back up to the top
    // then the header is invisible again
    if (window.scrollY === 0) {
      this.setState({
        headerVisible: false
      });
    }
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  handleFaqOpen = () => {
    this.setState({
      faqOpen: true
    });
  };

  handleFaqClose = () => {
    this.setState({
      faqOpen: false
    });
  };

  handleMenuOpen = () => {
    this.setState({
      menuOpen: true
    });
  };

  handleMenuClose = () => {
    this.setState({
      menuOpen: false
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header
            drawerOpen={this.state.drawerOpen}
            headerVisible={this.state.headerVisible}
            toggleDrawer={this.toggleDrawer}
            menuVisible={this.state.menuOpen}
            menuOpen={this.handleMenuOpen}
            menuClose={this.handleMenuClose}
          />

          <Element name="Featured Artist">
            <Featured />
          </Element>
          <Element name="Event Info">
            <EventInfo
              faqVisible={this.state.faqOpen}
              faqOpen={this.handleFaqOpen}
              faqClose={this.handleFaqClose}
              menuVisible={this.state.menuOpen}
              menuOpen={this.handleMenuOpen}
              menuClose={this.handleMenuClose}
            />
          </Element>
          <Element name="Latest News">
            <Latest />
          </Element>
          <Element name="Pricing">
            <Pricing />
          </Element>
          <Element name="Get Directions">
            <Location />
          </Element>

          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
