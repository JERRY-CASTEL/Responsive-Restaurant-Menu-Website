let form = document.querySelector('#form');
let userName = document.querySelector('#UserName')
let Email = document.querySelector('#Email')
let password = document.querySelector('#Password')
let cPassword = document.querySelector('#cPassword')

form.addEventListener('submit',(e)=>{
    
    if(!formValidation());
    e.preventDefault();
});

function formValidation(){
    let Name = userName.value.trim();
    let mail = Email.value.trim();
    let passcode = password.value.trim();
    let cPasscode = cPassword.value.trim();
    let success = true

    if(Name===''){
        success=false;
        setError(userName,'Username is required')
    }
    else{
        setSuccess(userName)
    }

    if(mail===''){
        success = false;
        setError(Email,'Email is required')
    }
    else if(!validateEmail(mail)){
        success = false;
        setError(Email,'Please enter a valid email')
    }
    else{
        setSuccess(Email)
    }

    if(passcode === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passcode.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cPasscode === ''){
        success = false;
        setError(cPassword,'Confirm password is required')
    }
    else if(cPasscode!==passcode){
        success = false;
        setError(cPassword,'Password does not match')
    }
    else{
        setSuccess(cPassword)
    }

    return success;

}

function setError(element,message){
    const parent = element.parentElement;
    const errorElement = parent.querySelector('.error');
    errorElement.innerHTML = message;
    parent.classList.add('error');
    parent.classList.remove('success');
}

function setSuccess(element){
    const parent = element.parentElement;
    const errorElement = parent.querySelector('.error');
    errorElement.innerHTML = '';
    parent.classList.add('success');
    parent.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };