
const button = document.querySelector('button');
let errorspan = document.querySelector('.errorspan');
let errorphone = document.querySelector('.errorphone');
let errorpostcode = document.querySelector('.errorpostcode');
let errorpassword = document.querySelector('.errorpassword');

let emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let phonepattern = /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/;
let postcodepattern = /^\d{4}$/;
let passwordpattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


button.addEventListener('click',() => {
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const postcode = document.querySelector('#postcode').value;
    const password = document.querySelector('#password').value;

    
    console.log(email);
    console.log(phone);
    console.log(postcode);
    console.log(password);

    if(emailpattern.test(email)){
        errorspan.innerHTML = '';
    }else{
        errorspan.innerHTML = 'invalid email';
        errorspan.classList.add('errorspan');
    }

    if(phonepattern.test(phone)){
        errorphone.innerHTML = '';
    }else{
        errorphone.innerHTML = 'invalid phone number';
        errorphone.classList.add('errorspan');
    }

    if(postcodepattern.test(postcode)){
        errorpostcode.innerHTML = '';
    }else{
        errorpostcode.innerHTML = 'invalid Post code';
        errorpostcode.classList.add('errorspan');
    }

    if(passwordpattern.test(password)){
        errorpassword.innerHTML = '';
    }else{
        errorpassword.innerHTML = 'Atleast one uppercase, one lower case,one digit,one special character, minimum lenght - 8';
        errorpassword.classList.add('errorspan');
    }
})












// At least one upper case English letter, (?=.*?[A-Z])
// At least one lower case English letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// Minimum eight in length .{8,} (with the anchors)