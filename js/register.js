var nameInput = document.getElementById("NameId");
var emailInput = document.getElementById("EmailId");
var passInput = document.getElementById("PassId");
var btnUpInput = document.getElementById("btnUp")
var alertMsg = document.getElementById("alert-msg")
var validName = document.getElementById("validname")
var validEmail = document.getElementById("validemail")
var validPass = document.getElementById("validpass")

var logemail = document.getElementById("emailId");
var logPass = document.getElementById("passId");
var btnINInput = document.getElementById("btnIn");
var logMsg = document.getElementById("msg");

var Container = [];



// if(localStorage.getItem("user") != null){
//     Container = JSON.parse(localStorage.getItem("user"));
// }

// // localStorage.setItem("user", JSON.stringify(Container));

// function save(){

//     if(nameInput.value == "" || emailInput.value == "" || passInput.value == ""){
//         alertMsg.innerHTML = "All Inputs Are Required !";
//         return false;
//     }

//     if(ValidationName() == true && ValidationEmail == true && ValidationPass == true){

//         for(var i=0; i<Container.length; i++){
//             if(emailInput.value == Container[i].email){
//                 alertMsg.innerHTML = "This email already exists !";
//                 emailInput.classList.add("is-invalid")
//                 return true;
//             }
//         }

//         var account = {
//             name: nameInput.value,
//             email: emailInput.value,
//             pass: passInput.value
//         };
    
//         Container.push(account);
//         localStorage.setItem("user", JSON.stringify(Container));
        
//         document.getElementById('alert-msg').innerHTML = "Success";
        
        
//     }
//     console.log(Container)
// }
// console.log(localStorage.getItem("user"))

// btnUpInput.addEventListener('click', function(){save()})



var Container = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];


function save() {
    if (nameInput.value === "" || emailInput.value === "" || passInput.value === "") {
        alertMsg.innerHTML = "All Inputs Are Required!";
        return false;
    }

    if (ValidationName() && ValidationEmail() && ValidationPass()) {
        for (var i = 0; i < Container.length; i++) {
            if (emailInput.value === Container[i].email) {
                alertMsg.innerHTML = "This email already exists!";
                emailInput.classList.add("is-invalid");
                return false;
            }
        }

        var account = {
            name: nameInput.value,
            email: emailInput.value,
            pass: passInput.value
        };

        Container.push(account);
        localStorage.setItem("user", JSON.stringify(Container));

        alertMsg.innerHTML = "Success!";
        nameInput.value = "";  
        emailInput.value = "";
        passInput.value = "";
        emailInput.classList.remove("is-invalid");
    } else {
        alertMsg.innerHTML = "Validation failed!";
    }

    console.log(Container);
}




// nameInput.addEventListener('input',ValidationName())
function ValidationName(){
    var text = nameInput.value;
    var regex = /^.{2,}$/;

    if(regex.test(text) == true){
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        validName.classList.add("d-none")
        return true;
    }
    else{
        nameInput.classList.add("is-invalid")
        nameInput.classList.remove("is-valid")
        validName.classList.remove("d-none")
        return false;
    }

}


// emailInput.addEventListener('input', function(){ValidationEmail()})
function ValidationEmail(){
    var text = emailInput.value;
    var regex = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(regex.test(text) == true){
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        validEmail.classList.add("d-none")
        return true;
    }
    else{
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
        validEmail.classList.remove("d-none")
        return false;
    }

}


// passInput.addEventListener('input', function(){ValidationPass()})
function ValidationPass(){
    var text = passInput.value;
    var regex = /^.{5,}$/;

    if(regex.test(text) == true){
        passInput.classList.add("is-valid")
        passInput.classList.remove("is-invalid")
        validPass.classList.add("d-none")
        return true;
    }
    else{
        passInput.classList.add("is-invalid")
        passInput.classList.remove("is-valid")
        validPass.classList.remove("d-none")
        return false;
    }

}



//   login


function login(){

    if( logemail.value === "" || logPass.value === ""){
        document.getElementById('msg').innerHTML = "All Inputs Are Required!";

    } else if (Container.length == 0){
        logMsg.innerHTML = 'Please sign up first !'

    }else{
        for(var i=0; i<Container.length; i++){
            if(Container[i].email === logemail.value && Container[i].pass === logPass.value){
                localStorage.setItem('username', JSON.stringify(Container[i].name));
                window.location.href = './home.html';
                // alert("hiii");
                return true;
            }else{
                logMsg.innerHTML = 'incorrect password or email !';
                return false;
            }
        }
    }
}

// btnINInput.addEventListener('click', function(){login()})



// logout


function load(){
    document.getElementById("welcome").innerHTML = 'welcome ' + JSON.parse(localStorage.getItem('username'));
}



function logOut(){
    localStorage.removeItem('username');
    window.location.href = '../index.html';
}