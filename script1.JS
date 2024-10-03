function validate(e){
    e.preventDefault()
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const age=document.getElementById("age").value;
    const msgbox=document.getElementById("message").value;
    let message=''
    if(email===''){
        message='please enter an email';
        msgbox.style.color='red'
    }
    else if(password===''){
        message='please enter a password';
        msgbox.style.color='red'
    }
   else if(age===''){
        message='please enter an age';
        msgbox.style.color='red'
    }
    else {
        message='login successful';
msgbox.style.color='green'
    }
    msgbox.innertext=message
}
