import 'bootstrap/dist/css/bootstrap.min.css';
import { nav,button,Card,i } from 'react-bootstrap';
import image from './assets/img/couv.jpg'
import salon from './assets/img/salon.jpg'
import chambre from './assets/img/chambre.jpg'
import couisine from './assets/img/couisine.jpg'
import toilette from './assets/img/toilette.jpg'
import abt from './assets/img/about.png'
import "./form.css"

function App() {
  return (
    <div className="App">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LaCasa</a>
    <button class="navbar-toggler" type="button" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#gallery">GALLERY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">CONTACT</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

<header>
  <section id="home">
<div  class="titre">
    <h1>INTERIOR IN YOUR HOUSE</h1>
    <span>CHOOSE FOR YOUR SELF SOMTHING NEW</span>
    
  </div>
  <div class="couverture"> 
    <img src={image}></img>
  </div>
  </section>
 </header>
 <main>
   <section id="gallery">
   <div class="card" >
  <img src={salon} class="card-img-top" alt="LIVING ROOM"></img>
  <div class="card-body">
    <h5 class="card-title">LIVING ROOM</h5>
  </div>
  </div>
  
  <div class="card" >
  <img src={chambre} class="card-img-top" alt="BEDROOM"></img>
  <div class="card-body">
    <h5 class="card-title">BEDROOM</h5>
     </div>
  </div>
  <div class="card" >
  <img src={couisine} class="card-img-top" alt="KITCHEN"></img>
  <div class="card-body">
    <h5 class="card-title">KITCHEN</h5>
   </div>
  </div>
  <div class="card" >
  <img src={toilette} class="card-img-top" alt="DRESSING"></img>
  <div class="card-body">
    <h5 class="card-title">DRESSING</h5>
     </div>
  </div>
   </section>
   <section id="about">
     <h1>ABOUT LaCasa</h1>
          <p>The LaCasa company was founded in 1972 by Néji MHIRI. He intends to set up a new concept: design at an affordable price! From then on, a success story marked by innovation and evolution begins.
Over the years, MEUBLATEX confirms its position as leader on the Tunisian market in the manufacture of furniture of all kinds (wood, metal, synthetic products, etc.).
To its credit, four major poles of activity which today allow custome writing to establish its reputation even beyond Tunisian borders, thanks to a structured organization and the desire to meet the expectations of more and more customers. more demanding and open to the world of fashion and design.
 A bet taken on a daily basis for a brand now known to all.</p>
 <img src={abt} alt="about"></img>
   </section>
 </main>
 <footer>
   <section id="contact">
    <div class="cordonne">
      <h6>Siège et Bureau commercial: CENTRE URBAIN NORD 1003 Tunis Tunisie</h6><br></br>
      <h6>Commercial TUNIS: +216.28 312 477</h6><br></br>
      <h6>Email: commercial@paradis-deco.tn</h6><br></br>
          </div>
         
          <div class="dr">© 2021 PARADISDECO ALL RIGHTS RESERVED</div>
          </section>
 </footer>
    </div>
    
  );
}

export default App;
