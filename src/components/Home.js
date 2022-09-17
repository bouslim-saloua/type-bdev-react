import React from "react";

const Home=()=>{
return(
   
    <div class="main" id="top">
      <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
        <div class="container"><a class="navbar-brand" href="index.html"><img src="./assets/img/uca-logo.png" height="45" alt="logo" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"> </span></button>
          <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
              <li class="nav-item px-2"><a class="nav-link link-hover" aria-current="page" href="index.html"><strong>Acceuil</strong></a></li>
              <li class="nav-item px-2"><a class="nav-link link-hover" href="#services"><strong>Connexion</strong></a></li>
              <li class="nav-item px-2"><a class="nav-link link-hover" href="#findUs"><strong>S'inscrire</strong></a></li>
            </ul>
            <div class="dropdown d-none d-lg-block">
           
            </div><a class="btn btn-primary order-1 order-lg-0 ms-lg-3" href="#!">Commencer</a>
           
          </div>
        </div>
      </nav>
      <section class="py-xxl-10 pb-0" id="home">
        <div class="bg-holder bg-size" style={{backgroundImage:"url('./assets/img/gallery/hero-header-bg.png')",backgroundPosition:"top center",backgroundSize:"cover"}}>
        </div>
       

        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end"><img class="pt-7 pt-md-0 w-100" src="./assets/img/illustrations/undraw_analysis_re_w2vd.svg" alt="hero-header" /></div>
            <div class="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-8">
              
              <h1 class="fw-bolder fs-6 fs-xxl-7 mb-2" style={{color : "#A34F23"}}>Organisation de manifestations scientifiques</h1>
              <p class="fs-1 mb-5">La manifestation (ou au moins une partie) <br></br>doit se dérouler dans l’un des établissements de l'université cadi Ayyad. </p><a class="btn btn-primary me-2" href="#!" role="button">Dashboard<i class="fas fa-arrow-right ms-2"></i></a>
            </div>
          </div>
        </div>
      </section>
      </div>

);
}
export default Home;