let emailnode=document.getElementById("mail");
let errornode1=document.getElementById("error1");

let namenode=document.getElementById("name");
let errornode3=document.getElementById("error3");

let contactnode=document.getElementById("contact");
let errornode4=document.getElementById("error4");

let passwordnode=document.getElementById("pass");
let errornode2=document.getElementById("error2");

let cpasswordnode=document.getElementById("cpass");
let errornode5=document.getElementById("error5");

function function1(){
    errornode1.innerHTML="";
    let email=emailnode.value;
    let ss=email.substring(email.indexOf("@")+1);
    if(email==""){
        errornode1.innerHTML="Email field is required";
        emailnode.style.border="2px solid red";
        return false;
    }
    else if(!email.includes("@") || ss=="" ){
        errornode1.innerHTML="Please put valid email-id";
        emailnode.style.border="2px solid red";
        return false;
    }
    else{
        emailnode.style.border="2px solid gray";
        return true;
    }
}

function function3(){
    errornode3.innerHTML="";
    let name=namenode.value;
    if(namenode.value==""){
        errornode3.innerHTML="Name field is required";
        namenode.style.border="2px solid red";
        return false;
    }
    else if(name.length<2){
        errornode3.innerHTML="Name Should contain atleast 2 Character";
        namenode.style.border="2px solid red";
        return false;
    }
    else{
        namenode.style.border="2px solid gray";
        return true;
    }
}

function function4(){
    errornode4.innerHTML="";
    let contact=contactnode.value;
    if(contactnode.value==""){
        errornode4.innerHTML="Contact Number is required";
        contactnode.style.border="2px solid red";
        return false;
    }
    else if(isNaN(contact)){
        errornode4.innerHTML="Enter Valid Contact Number of 10 Digits";
        contactnode.style.border="2px solid red";
        return false;
    }
    else if(contact.length!=10){
        errornode4.innerHTML="Enter Valid Contact Number of 10 Digits";
        contactnode.style.border="2px solid red";
        return false;
    }
    else{
        contactnode.style.border="2px solid gray";
        return true;
    }
}

function function2(){
    errornode2.innerHTML="";
    let password=passwordnode.value;
    console.log(password);
    let regexp=new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])");
    if(password==""){
        errornode2.innerHTML="This field is required";
        passwordnode.style.border="2px solid red";
        return false;
    }

    else if(password.length<8){
        errornode2.innerHTML="Password length of atleast 8 character";
        passwordnode.style.border="2px solid red";
        return false;
    }

    else if(regexp.test(password)==false){
        errornode2.innerHTML="Password should be alphanumeric with atleast one special symbol from @#$%^&-+=()";
        passwordnode.style.border="2px solid red";
        return false;
    }
    else{
        passwordnode.style.border="2px solid gray";
        return true;
    }
}

function function5(){
    errornode5.innerHTML="";
    let password=passwordnode.value;
    let cpassword=cpasswordnode.value;
    if(cpassword==""){
        errornode5.innerHTML="This field is required";
        cpasswordnode.style.border="2px solid red";
        return false;
    }
    else if(cpassword!=password){
        errornode5.innerHTML="Password does not match";
        cpasswordnode.style.border="2px solid red";
        return false;
    }
    else{
    cpasswordnode.style.border="2px solid gray";
    return true;
    }
}

function validation(){
    let state1=function1();
    let state2=function2();
    let state3=function3();
    let state4=function4();
    let state5=function5();

  return (state1 && state2 && state3 && state4 && state5);
}

function validation1(){
    let state1=function1();
    let state2=function2();

    return (state1 && state2);
}