import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Header from './screens/Header';
import Footer from './screens/Footer';
import Container from './navigation/Container';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
    <Router>
        <div>
            <Header />
            <div>
                <Container />
            </div>
            <Footer />
        </div>
    </Router>
);

render(<App />, document.getElementById('root'));