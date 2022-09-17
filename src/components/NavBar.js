import React, { useEffect, useState } from "react";
import EventBus from "../common/EventBus";
import AuthService from "../services/auth.service";

const NavBar = () =>{
    const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      
    //  setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };
  }, []);
  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

return(
<div>
{currentUser?(
   <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
   <div class="container"><a class="navbar-brand" href="/"><img src="./assets/img/uca-logo.png" height="45" alt="logo" /></a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"> </span></button>
     <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
       <ul class="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
         <li class="nav-item px-2"><a class="nav-link link-hover" aria-current="page" href="/home"><strong>Acceuil</strong></a></li>
       </ul>
       <div class="dropdown d-none d-lg-block">
      
       </div><a class="btn btn-primary order-1 order-lg-0 ms-lg-3" href="/user/dashboard">Commencer</a>
       <a class="btn btn-primary order-1 order-lg-0 ms-lg-3" onClick={logOut}>Déconnexion</a>
     </div>
   </div>
 </nav> 
):(
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
        <div class="container"><a class="navbar-brand" href="index.html"><img src="./assets/img/uca-logo.png" height="45" alt="logo" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"> </span></button>
          <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
              <li class="nav-item px-2"><a class="nav-link link-hover" aria-current="page" href="/home"><strong>Acceuil</strong></a></li>
              <li class="nav-item px-2"><a class="nav-link link-hover" href="/login"><strong>Connexion</strong></a></li>
              <li class="nav-item px-2"><a class="nav-link link-hover" href="/register"><strong>S'inscrire</strong></a></li>
            </ul>
            <div class="dropdown d-none d-lg-block">
           
            </div><a class="btn btn-primary order-1 order-lg-0 ms-lg-3" href="/user/dashboard">Commencer</a>
            
          </div>
        </div>
      </nav>
)
}
</div>
);
}


export default NavBar;