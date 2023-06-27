// DECLEARING THE VARIABLES
// THE BUTTONS
const btn_log = document.querySelector(".sign_in");
const btn_sign = document.querySelector(".sign_up");
const next_btn = document.querySelector(".nextbtn");
const back_btn = document.querySelector(".backbtn");
// THE PAGES SIGNUP AND LOGIN PAGE
const signupPage = document.querySelector(".signup_page");
const loginPage = document.querySelector(".login_page");
// THE LOGIN INPUT
const username = document.querySelector(".username");
const log_password = document.querySelector(".passwordlog");
// THE SIGNUP INPUT
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confPassword = document.querySelector(".password2");

// BUTTON IN THE POPUP BOX
const popupBacklogin = document.querySelector(".back_login");
const popup = document.querySelector(".pop_up");
const loader = document.querySelector(".loading");
const userValue = JSON.parse(localStorage.getItem("userValue") || "[]");

// ADDING AN EVENTLISTENER TO THE NEXT BUTTON TO MOVE TO SIGNUP PAGE
next_btn.addEventListener("click", ()=>{
    loader.classList.add("show");
    setTimeout(()=> loader.remove(), 5000);
    setTimeout(()=>{
        loginPage.classList.add("hide");
    },5000);

    setTimeout(()=> {
        signupPage.classList.add("show");
    }, 5000);
});

// ADDING AN EVENTLISTENER TO THE BACK BUTTON TO REURN  TO LOGIN PAGE
back_btn.addEventListener("click", ()=>{
    loginPage.classList.remove("hide");
    signupPage.classList.remove("show");
});

// ADDING AN EVENTLISTENER TO THE SIGNUP BUTTON
btn_sign.addEventListener("click", (e)=>{
    e.preventDefault();
    // GETTING THE VALUES WHEN INPUT TO THE TEXT FIELD
    let emailInput = email.value;
    let passwordInput = password.value;
    let confPassInput = confPassword.value;

    if(emailInput || passwordInput || confPassInput) {
        let dataObj = {
            email: emailInput,
            password: passwordInput,
        }

        // SAVING SIGN UP VALUES TO TH LOCAL STORAGE
        userValue.push(dataObj);
        localStorage.setItem("userValue", JSON.stringify(userValue));

        loader.classList.add("show");
        setTimeout(()=> loader.remove(), 1000);
        
        setTimeout(()=>{
            popup.classList.add("open");
        }, 1000);
    }
    setTimeout(()=>{
        clearInputField();
    }, 1000);
});

const clearInputField = ()=>{
    email.value = "";
    password.value = "";
    confPassword.value = "";
}
clearInputField();

// WHEN THE LOGIN BUTTON IS CLICKEDIN THE POPUP BOX RETURN TO LOGIN PAGE
    popupBacklogin.addEventListener("click", ()=>{
        loginPage.classList.remove("hide");
        signupPage.classList.remove("show");
    });

// CHECK IF USERNAME AND PASSWORD IS IN THE LOCAL STORAGE IF YES LOGIN ELSE RETURN FALSE

btn_log.addEventListener("click", (e)=>{
    e.preventDefault();
    userValue.forEach((user)=>{

        let usernameInput = username.value;
        let log_passwordInput = log_password.value;

        let username1 = user.email;
        let password2 = user.password;

        if(username1 === usernameInput && password2 === log_passwordInput){
            window.location.href = "todo.html";
        }else {
           return false
        }
    });
});
