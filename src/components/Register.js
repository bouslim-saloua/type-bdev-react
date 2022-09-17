import React,{useRef, useState} from "react";
import '../css/Register.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";
const required = value =>{
  if(!value){
    return(
      <div className="invalid-feedback d-block">
Ce champ est obligatoire, il ne doit pas être vide!
      </div>
    );
  }
};
//vérifier l email
const vemail = value =>{
  if(!isEmail(value)){
    <div className="invalid-feedback d-block">
      L'email que vous avez fourni n'est pas valid !
    </div>
  }
}
//nom
const vnom =value =>{
  if(value.length < 3 || value.length >30){
return(
  <div className="invalid-feedback d-block">
Le nom doit être entre 3 et 30 caractères!
  </div>
);
  }
};

//prenom
const vprenom = value =>{
  if(value.length < 3 || value.length > 30){
      return(
          <div className="invalid-feedback d-block">
Le prénom doit être entre 3 et 30 caractères!
          </div>

      );
  }
};

//password
const vpassword = value =>{
  if(value.length < 8 || value.length > 40){
      return(
          <div className="invalid-feedback d-block">
              Votre mot de passe doit être entre 8 et 40  caractères!
          </div>
      );
  }
};

//validation téléphone
const vtelephone = value =>{
  var pattern = new RegExp(/(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/);
  if(!pattern.test(value)){
      return(
<div className="invalid-feedback d-block">
Le numéro de téléphone doit-être un numéro marocain valid !
</div>
      );
  }else if(value.length !==10){
return(
<div className="invalid-feedback d-block">
Le numéro de téléphone ne doit dépasser 10 caractères!
</div>
);
}
};
const Register=()=>{
  const form = useRef();
  const checkBtn = useRef();
const [nom, setNom] = useState("");
const [prenom, setPrenom] = useState("");
const [email, setEmail]  = useState("");
const [telephone, setTelephone] = useState("");
const [password, setPassword] = useState("");
const [profession, setProfession] = useState("");
const [successful, setSuccessful] = useState(false);
const [message, setMessage] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const navigate = useNavigate();

  const onChangeNom = (e) =>{
const nom = e.target.value;
setNom(nom);
  }

  const onChangeConfirmPassword = (e) =>{
    const confirmPassword = e.target.value;
   setConfirmPassword(confirmPassword);
  }
  //pour vérifier que les deux mots de passes sont identiques
 const vconfirmpassword = (value)=>{
if(!(value === password) || !(value)){
  return(
<div className="valid-feedback d-block" >
  success: les mots de passe sont identiques!
</div>
  );
}else{
  return(
<div className="invalid-feedback d-block">
erreur: les mots de passe ne sont pas identiques!
</div>
  );
}
  }


  const onChangePrenom = (e) =>{
const prenom = e.target.value;
setPrenom(prenom);
  }

 const onChangeTelephone = (e) =>{
    const telephone = e.target.value;
    setTelephone(telephone);
  }

  const onChangeEmail = (e) =>{
    const email = e.target.value;
    setEmail(email);
  }

  const onChangeProfession = (e) =>{
    const profession = e.target.value;
    setProfession(profession);
  }
  const onChangePassword = (e) =>{
    const password = e.target.value;
    setPassword(password);
  }

  const handleRegister = (e) =>{
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(nom,prenom,telephone, email, password, profession).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          navigate("/home");
          window.location.reload();
         // successNotification();
         toast.success('Votre compte est enregistré avec succé!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
         // errorNotification();
        // toast("ffff!")
        toast.error(' email or phone number already exist', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        }
      );
    }
  };
  
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
              <Form className="needs-validation" noValidate  onSubmit={handleRegister} ref={form}>
                <div class="form-group first row">
                  <div className="col-md-6">
                  <label htmlFor="nom">Nom <span className="obg">*</span></label>
                  <Input type="text" class="form-control"  id="nom" name="nom" value={nom} validations={[vnom]} onChange={onChangeNom}/>
                  </div>
                  <div className="col-md-6">
                  <label htmlFor="prenom">Prénom <span className="obg">*</span></label>
                  <Input type="text" class="form-control"  id="prenom" name="prenom" value={prenom} onChange={onChangePrenom} validations={[vprenom]}/>
                  </div>
                  
                </div>
                <div class="form-group first">
                  
                  <label htmlFor="profession">Profession <span className="obg">*</span></label>
                  <Input type="text" class="form-control"  id="profession" value={profession} onChange={onChangeProfession} />
                 
                  
                </div>
                <div class="form-group first row">
                  <div className="col-md-6">
                  <label htmlFor="email">Adresse e-mail <span className="obg">*</span></label>
                  <Input type="text" class="form-control"  id="email" name="email" value={email} validations={[vemail]} onChange={onChangeEmail} />
                  </div>
                  <div className="col-md-6">
                  <label htmlFor="tel">Téléphone <span className="obg">*</span></label>
                  <Input type="text" class="form-control"  id="tel" name="tel" onChange={onChangeTelephone} value={telephone} validations={[vtelephone]}/>
                  </div>
                  
                </div>


                <div class="form-group last mb-3 row">
                  <div className="col-md-6">
                  <label htmlFor="password">Mot de passe <span className="obg">*</span></label>
                  <Input type="password" class="form-control"  id="password" onChange={onChangePassword} value={password} validations={[vpassword]}/>
                  </div>
                  <div className="col-md-6">
                  <label htmlFor="cpassword">Confirmer mot de passe <span className="obg">*</span></label>
                  <Input type="password" class="form-control"  id="cpassword" onChange={onChangeConfirmPassword} value={confirmPassword} validations={[vconfirmpassword]}/>
                  </div>

                  <span>Vous avez déjà un compte? &nbsp;&nbsp;&nbsp;&nbsp;<a href="/login"><strong>Se connecter</strong></a></span>
                </div>
                <div className="form-group">
                <button className="btn btn-primary btn-block authbtn">Enregistrer</button>
              </div>
              

              {message && (
            <div>
               <div className="toast">
          <div className="toast-item">
            <div className="toast-success">
            
            </div>
            </div>
            </div>
                     
            <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
    
);
}
export default Register;
