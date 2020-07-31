function register(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    
    // THIS IS THE DIV TAG WITH ID MSG THAT INPUTS THE DATA INTO IT.
    var msg = document.getElementById('msg');

    if(name == '' || email == '' || password ==  '' || password2 == ''){
        // THIS IS THE FAILING MESSAGE
        msg.className = "alert alert-danger";
        msg.innerHTML = 'Please fill in all fields';
    }else{
        if(name.length < 3){
            msg.className = "alert alert-danger";
            msg.innerHTML = 'Please fill in a name length that is more that 3 characters';
        }else{
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");
            if(email < 1 || dotpos < atpos+2 || dotpos >= email.length){
                msg.className = "alert alert-danger";
                msg.innerHTML = 'Enter valid email';
            }else{
                        // THIS IS THE SUCCESS MESSAGE
                msg.className = "alert alert-success";
                msg.innerHTML = (name+ ' '+ 'has submitted an form with email'+ ' '+ email);
            }
            
        }
       
    }
    if (password2 != password){
        // THIS MESSAGE CHECKS IF THE CONFIRMATION PASSWORD MATCHED THE PASSWORD
        msg.className = "alert alert-danger";
        msg.innerHTML = 'Passwords do not match';
    }

}

document.getElementById('regForm').addEventListener('submit',register,false);