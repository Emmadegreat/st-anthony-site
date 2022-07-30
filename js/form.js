function validateForm(e) {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById("email").value;
    let phone__number = document.getElementById("phone__number").value;
    let address = document.getElementById("address").value;
    let course = document.getElementById("course").value;
    //let namereg =  ; // /^[A-Za-z]*\s{1}[A-Za-z]*&/; // /^[a-zA-Z0-9\-]+$/;
    let error__message = document.getElementById('error__message');
    let text;
    let emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;
    let password2 = document.getElementById("conf__password").value;
   

    if ((name==='' ||  name.length) < 10) {
        text = 'Name field is required, at least 10 characters.';
        error__message.innerHTML = text;
        e.cancelBubble = true; 
        return false;
    } else if (!name.match(/^[a-zA-Z ]*$/)) {
        text = 'Name must only be alphabet.';
        error__message.innerHTML = text;
        e.cancelBubble = true; 
        return false;
    }else{
        text = name;
        error__message.innerHTML = text;
        e.cancelBubble = true; 
        true;
    };

    if (password === '') {
        text = 'Password field is required.';
        error__message.innerHTML = text;
        e.cancelBubble = true;
        return false;
    } else if(!password.match(passreg)) {
        text = 'Password length must be at least 8, mixed with alphanumeric, minimum of 1 uppercase and 1 lowercase and special characters.';
        error__message.innerHTML = text;
        e.cancelBubble = true;
        return false;
    } else {
        true;
    }

    if (password2==='' || (password2 !== password)) {
        text = "Confirm Password";
        error__message.innerHTML = text;
        e.cancelBubble = true;
        return false;
    } else {
        true;
    }
    

    if (email === '') {
        text = 'Email field is required.';
        error__message.innerHTML = text;
        e.cancelBubble = true;
        return false;
    } else if(!email.match(emailreg)) {
        text = 'Invalid email address.';
        error__message.innerHTML = text;
        e.cancelBubble = true;
        return false;
    } else {
        true;
    }

    if (phone__number === '') {
        text = 'Phone number field is required.';
        error__message.innerHTML = text;
        e.cancelBubble = true;
        return false;
    } else if(!phone__number.match(/^\d{11}$/)) {
        text = 'Phone number length must be 11';
        error__message.innerHTML = text;
        e.cancelBubble = true;
        return false;
    } else {
        true;
    }

    
    if (address === '') {
        text = 'Address field is required.';
        error__message.innerHTML = text;
        e.cancelBubble = true;
        return false;
    } else {
        true;
    }

    
    if (course === '') {
        text = 'Course field is required.';
        error__message.innerHTML = text;
        e.cancelBubble = true;
        return false;
    } else {
        true;
    }
    text = 'form successfully submitted';
    error__message = text;
    true;
}



