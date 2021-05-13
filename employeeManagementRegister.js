const fName = document.querySelector('#firstname'); 
const lName = document.querySelector('#lastname');
const Email = document.querySelector('#email');
const Phone = document.querySelector('#phone');

const firstnameError = document.querySelector('.firstname-error');
const lastnameError = document.querySelector('.lastname-error');
const emailError = document.querySelector('.email-error');
const phoneError = document.querySelector('.phone-error');

let userRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
let emailRegex = RegExp("^([a-zA-Z0-9]*[+._-]*[a-zA-Z0-9]+@[a-zA-Z]+.{3}[a-zA-z.]*[a-zA-z]{2})+$");
let phoneRegex = RegExp( /^[+][9][1][ ][0-9]{10}$/);



validateMsg = (test,val,testErr,message) => {
        if(test.test(val.value)){
        testErr.textContent = " ";

    }
    else{
        testErr.textContent = message;
    }
}

fName.oninput = function(){
    let message = "please enter your valid name"
    validateMsg(userRegex,fName,firstnameError,message);
}
lName.oninput = function(){
    let message = "please enter your valid name"
    validateMsg(userRegex,lName,lastnameError,message);
}

email.oninput = function(){
    let message = "Enter valid Email id"
    validateMsg(emailRegex,Email,emailError,message);
}
phone.oninput = function(){
    let message = "Enteryour  valid Phone"
    validateMsg(phoneRegex,Phone,phoneError,message);
}
const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function() {
    output.textContent = salary.value;
});