import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import RouteApp from '../route';
import '../asset/css/main.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='container'>
          <Container>
            <RouteApp />
          </Container>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
