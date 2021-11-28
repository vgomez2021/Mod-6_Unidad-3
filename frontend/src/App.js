import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import BioPage from './pages/BioPage';
import DiscoPage from './pages/DiscoPage';
import LibrosPage from './pages/LibrosPage';
import VideosPage from './pages/VideosPage';
import FotosPage from './pages/FotosPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <Router>
      <Header /> 
      <Nav />
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/BioPage' exact component={BioPage}/>
        <Route path='/DiscoPage' exact component={DiscoPage}/>
        <Route path='/LibrosPage' exact component={LibrosPage}/>
        <Route path='/VideosPage' exact component={VideosPage}/>
        <Route path='/FotosPage' exact component={FotosPage}/>
        <Route path='/NewsPage' exact component={NewsPage}/>
        <Route path='/ContactPage' exact component={ContactPage}/>
        </Switch>
        <Footer/>
        </Router>
  );
 }

export default App;
