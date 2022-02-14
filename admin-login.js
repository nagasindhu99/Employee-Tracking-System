function fieldCheck() {
    document.getElementById('btnaccess').onclick =function() {
        alert("Access code is Required");
    };
};  
function fieldClear() {
    document.getElementById('adminLogin').onreset();
}


function validate(){
    var inputkey=document.getElementById.('keyAccess');
    if(inputkey.value==""){
        alert("Access Code Is Required");
        inputkey.style.border="solid 2px red";
        document.getElementById('lbluser').style.visibility="visible";
        return false;
    }else if(inputkey.value.trim().length<6){
        alert("code is too short,Must be 6 Digit");
        inputkey.style.border="solid 2px red";
        document.getElementById('bluser').style.visibility="visible";
        return false;
    }else{
        true;
    }
}