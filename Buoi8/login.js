import Register from "./register.js"
import { getAuth, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"'
class Login {
    $containerDiv
    $titleHeader
    $signinForm
    $emailInputEmail
    $passInputPass
    $submitBtn
    $gotoSignupLink


    constructor() {
        this.$emailInputEmail = document.createElement("input");
        this.$emailInputEmail.type = "email";
        this.$emailInputEmail.placeholder = "Enter your email";

        this.$passInputTxt = document.createElement("input");
        this.$passInputTxt.type = "password";
        this.$passInputTxt.placeholder = "Enter your password";

        this.$subimtBtn = document.createElement("button");
        this.$subimtBtn.type = "submit";
        this.$subimtBtn.innerHTML = "Register";
        this.$subimtBtn.addEventListener("click", this.handleSubmit);

        this.$gotoSignupLink = document.createElement("a");
        this.$gotoSignupLink.innerHTML = "Don't have an account? Sign up";
        this.$gotoSignupLink.addEventListener("click", this.gotoSignup)

        this.$containerDiv = document.createElement("div");
        this.$containerDiv.classList.add("center", "app");

        this.$titleHeader = document.createElement("h2");
        this.$titleHeader.innerHTML = "Sign in to your account";
    }

    initRender = (container) => {
        
        this.$signupForm.appendChild(this.$emailInputEmail);
        this.$signupForm.appendChild(this.$passInputPass);
        this.$signupForm.appendChild(this.$subimtBtn);

        this.$signupForm.appendChild(this.$titleHeader);
        this.$signupForm.appendChild(this.$signinForm);
        this.$signupForm.appendChild(this.$gotoSigninLink);

        container.appendChild(this.$containerDiv)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.$emailInputEmail.value;
        const password = this.$passInputPass.value;
        if(email == ""){
            prompt("no email")
            return
        }

        if(password.length <6){
            prompt("password not long enough")
            return
        }

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    };

    gotoSignin = () => {
        const signup = new Register();
        // change active section
        changeActiveScreen(signup)
    };
}

export default Login;