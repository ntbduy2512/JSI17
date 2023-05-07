import Register from "./register"
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

    handleSubmit = (e) => {};

    gotoSignin = () => {
        const login = new Register();
        // change active section
    };
}

export default Login;