import React from "react";
import '../css/Register.css';
const Register=()=>{
return(
    <div class="half">
    <div class="bg order-1 order-md-2" >
 
    </div>
    <div class="contents order-2 order-md-1">

      <div class="container">
        <div class="row align-items-center justify-content-center">
        
          <div class="col-md-6">
           
            <div class="form-block">
            <div className="h-100 d-flex align-items-center justify-content-center" >
<img className="uca-logo" src="../assets/img/uca-logo.png"></img>

</div>
              <div class="text-center mb-5">
             
<hr></hr>
              <h3><strong>S'inscrire</strong></h3>
              </div>
              <form >
                <div class="form-group first row">
                  <div className="col-md-6">
                  <label for="username">Nom <span>*</span></label>
                  <input type="text" class="form-control"  id="username"/>
                  </div>
                  <div className="col-md-6">
                  <label for="username">Prénom <span>*</span></label>
                  <input type="text" class="form-control"  id="username"/>
                  </div>
                  
                </div>
                <div class="form-group first">
                  
                  <label for="username">Profession <span>*</span></label>
                  <input type="text" class="form-control"  id="username"/>
                 
                  
                </div>
                <div class="form-group first row">
                  <div className="col-md-6">
                  <label for="username">Adresse e-mail <span>*</span></label>
                  <input type="text" class="form-control"  id="username"/>
                  </div>
                  <div className="col-md-6">
                  <label for="username">Téléphone <span>*</span></label>
                  <input type="text" class="form-control"  id="username"/>
                  </div>
                  
                </div>


                <div class="form-group last mb-3 row">
                  <div className="col-md-6">
                  <label for="password">Mot de passe <span>*</span></label>
                  <input type="password" class="form-control"  id="password"/>
                  </div>
                  <div className="col-md-6">
                  <label for="password">Confirmation mot de passe <span>*</span></label>
                  <input type="password" class="form-control"  id="password"/>
                  </div>

                  <span>Vous avez déjà un compte ?<a><strong>Se connecter</strong></a></span>
                </div>
                
              

                <input type="submit" value="S'inscrire" class="btn btn-block btn-primary authbtn"/>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
    
);
}
export default Register;
