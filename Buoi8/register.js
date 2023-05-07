import Login from './login';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


class Register{
    $containerDiv
    $titleHeader
    $signupForm
    $emailInputEmail
    $nameInputTxt
    $passInputPass
    $confirmPassInputPass
    $subimtBtn
    $gotoSigninLink

    constructor() {
        this.$emailInputEmail = document.createElement("input");
        this.$emailInputEmail.type = "email";
        this.$emailInputEmail.placeholder = "Enter your email";

        this.$nameInputTxt = document.createElement("input");
        this.$nameInputTxt.type = "text";
        this.$nameInputTxt.placeholder = "Enter your name";

        this.$passInputTxt = document.createElement("input");
        this.$passInputTxt.type = "password";
        this.$passInputTxt.placeholder = "Enter your password";

        this.$confirmPassInputPass = document.createElement("input");
        this.$confirmPassInputPass.type = "password";
        this.$confirmPassInputPass.placeholder = "Confirm your name";

        this.$subimtBtn = document.createElement("button");
        this.$subimtBtn.type = "submit";
        this.$subimtBtn.innerHTML = "Register";
        this.$subimtBtn.addEventListener("click", this.handleSubmit);

        this.$gotoSigninLink = document.createElement("a");
        this.$gotoSigninLink.innerHTML = "You already have an account? Sign in";
        this.$gotoSigninLink.addEventListener("click", this.gotoSignin)

        this.$containerDiv = document.createElement("div");
        this.$containerDiv.classList.add("center", "app");

        this.$titleHeader = document.createElement("h2");
        this.$titleHeader.innerHTML = "Create your account";

        this.$signupForm = document.createElement("form");

    }
    initRender = (container) => {

        this.$signupForm.appendChild(this.$emailInputEmail);
        this.$signupForm.appendChild(this.$nameInputTxt);
        this.$signupForm.appendChild(this.$passInputPass);
        this.$signupForm.appendChild(this.$confirmPassInputPass);
        this.$signupForm.appendChild(this.$subimtBtn);

        this.$signupForm.appendChild(this.$titleHeader);
        this.$signupForm.appendChild(this.$signupForm);
        this.$signupForm.appendChild(this.$gotoSigninLink);

        container.appendChild(this.$containerDiv)
    }

    handleSubmit = (e) => {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
          // Signed in 
           const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    };

    gotoSignin = () => {
        const login = new Login();
        // change active section
    };
}


export default Register