// const btn=document.getElementById("btn-submit");

// btn.addEventListener("click",validateform);

function validateform(event){

    let username = document.getElementById("name-field").value;
    let email = document.getElementById("email-fieldl").value;
    let subject = document.getElementById("subject-field").value;
    let regexUserUame=/^[a-zA-Z]{3,15}$/;
    let nameresult= regexUserUame.test(username);
    let regexUserEmail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let emailresult=regexUserEmail.test(email);
    
    
   if(nameresult==false){
       alert("Please enter a valid username (3-15 characters).");
       event.preventDefault();
       return false;
   }
   if(emailresult==false){
       alert("Please enter a valid email address.");
       event.preventDefault();
       return false;
   }
   if(subject==""||null){
       alert("Please Enter a subject");
       event.preventDefault();
       return false;
   }
   return true;
   }