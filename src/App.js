
//import logo from './logo.svg';
import NavbarComponent from './navbarComponent';
import Login from './LoginComponent';
import HomeComponent from './home';
import Error404 from './Error404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePost from './CreatePost';
import PostDetailComponent from './PostDetailsComponent';
import ReduxTutorials from './reduxTutorials';
import FooterComponent from './footerComponent';
import ReducerComponent from './reducer';
import { useContext } from 'react';
//import { useState } from 'react';
import { ThemeContext } from '.';
import Button from 'react-bootstrap/Button'
import Register from './RegisterComponent';

function App() {
  const [theme, toggleTheme] = useContext(ThemeContext)
  //console.log('theme is this', theme)
  return (
    
    <div className="App" style={{background:theme.background, color:theme.foreground}}>
      
      <Router>

        <header>
          <NavbarComponent />
         
        </header>
        <Switch>

          <Route exact path="/"> 
          
              <HomeComponent />
            </Route>
      
        
            <Route exact path="/CreatePost"> 
              <CreatePost />
            </Route>

          <Route exact path="/redux">
            < ReduxTutorials />
          </Route>
          
            <Route exact path="/reducer"> 
              <ReducerComponent />
            </Route>
        
            <Route exact path="/posts/:id"> 
              <PostDetailComponent />
          </Route>
          
          <Route exact path="/login"> 
              <Login/>
          </Route>
          <Route exact path="/register"> 
              <Register/>
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
        <FooterComponent />
      </Router>
      
    </div>
    
 
  );
}

export default App;
