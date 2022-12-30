
function submitForm(){
    // Check whether all mandatory fields are filled or not
    let fName=document.getElementById('i1').value;
    let lName=document.getElementById('i2').value;
    let email=document.getElementById('i3').value;
    console.log(fName, lName, email);

    // show the alert only if all mandatory input fields are filled
    if(fName && lName && email){
        alert("Form Submitted Successfully!!");
    }
    else{
        alert("Please fill the mandaotory fields");
    }
   
}