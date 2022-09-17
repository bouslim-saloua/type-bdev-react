import React, { useReducer, useState , useRef} from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "../css/Register.css";
import AuthService from "../services/auth.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/**/
//vérifier que les champs ne sont pas vides
const required = (value)=>{
if(!value){
  //toastify
 /* const errRequired= toast.error(' Les champs ne doivent pas être vides', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });*/

    return(
<div className="ivalid-feedback d-block" >
Ce champ est obligatoire ! 
    </div>
    );
}
}
const Login=()=>{
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [loading, setLoading] = useState(false);
 const [message, setMessage] = useState("");
 const navigate = useNavigate();
 const form = useRef();
 const checkBtn = useRef();
 const onChangeEmail = (e)=>{
  const email = e.target.value;
  setEmail(email);
 };
 const onChangePassword = (e) =>{
  const password = e.target.value;
  setPassword(password);
 };
 const handleLogin = (e) =>{
  e.preventDefault();
  setMessage("");
  form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
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
    }else{
      setLoading(false);
    }
        
 }

return(
    <div className="half">
    <div className="bg order-1 order-md-2" >
 
    </div>
    <div className="contents order-2 order-md-1">

      <div className="container">
        <div className="row align-items-center justify-content-center">
        
          <div className="col-md-6">
           
            <div className="form-block">
            <div className="h-100 d-flex align-items-center justify-content-center" >
<img className="uca-logo" src="../assets/img/uca-logo.png"></img>

</div>
              <div className="text-center mb-5">
             
<hr></hr>
              <h3><strong>Se connecter</strong></h3>
              </div>
              <Form className="needs-validation" noValidate >
                <div className="form-group first row">
                  
                  <label htmlFor="email">Adresse e-mail <span className="obg">*</span></label>
                  <Input type="text" className="form-control"  id="email" name="email" value={email} onChange={onChangeEmail} validations={[required]}/>
                  </div>
                 
                  
              

                <div className="form-group last mb-3 row">
                  
                  <label htmlFor="password">Mot de passe <span className="obg">*</span></label>
                  <Input type="password" className="form-control"  id="password" name="password" value={password} onChange={onChangePassword} validations={[required]}/>
                
                  
                  <span>Vous n'avez pas un compte? &nbsp;&nbsp;&nbsp;&nbsp;<a href="/home"><strong>S'inscrire</strong></a></span>

                  <div className="form-group">
            <button className="btn btn-block btn-primary authbtn" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Se connecter</span>
            </button>
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
                </div>
                
              


              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
);
}
export default Login;