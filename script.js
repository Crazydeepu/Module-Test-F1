/*function showm(){
    var i1 = document.getElementById('i1');
    var i2 = document.getElementById('i2');
    var i3 = document.getElementById('i3');

    if (i1.value === '' | i2.value==='' | i3.value===''){
        
    }else {
        document.getElementById('message').style.opacity = '1';
    }
}
*/

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