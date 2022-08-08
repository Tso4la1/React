import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './carouselComponent';
//import logo from './logo.svg';
import NavbarComponent from './navbarComponent';
import HomeComponent from './home';
import FooterComponent from './footerComponent';

function App() {

  return (
    <div className="App">
      <header>
        <NavbarComponent />
      </header>
      <CarouselComponent />
      <HomeComponent />
      <FooterComponent />
     </div>
  );
}

export default App;
