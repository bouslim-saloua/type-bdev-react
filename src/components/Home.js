import React from "react";
import NavBar from "./NavBar";

const Home=()=>{
return(
   
    <div class="main" id="top">
      <NavBar/>
      <section class="py-xxl-10 pb-0" id="home">
        <div class="bg-holder bg-size" style={{backgroundImage:"url('./assets/img/gallery/hero-header-bg.png')",backgroundPosition:"top center",backgroundSize:"cover"}}>
        </div>
       

        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end"><img class="pt-7 pt-md-0 w-100" src="./assets/img/illustrations/undraw_analysis_re_w2vd.svg" alt="hero-header" /></div>
            <div class="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-8">
              
              <h1 class="fw-bolder fs-6 fs-xxl-7 mb-2" style={{color : "#A34F23"}}>Organisation de manifestations scientifiques</h1>
              <p class="fs-1 mb-5">La manifestation (ou au moins une partie) <br></br>doit se dérouler dans l’un des établissements de l'université cadi Ayyad. 
              </p><a class="btn btn-primary me-2" href="/user/dashboard" role="button">Dashboard<i class="fas fa-arrow-right ms-2"></i></a>
            </div>
          </div>
        </div>
      </section>
      </div>

);
}
export default Home;