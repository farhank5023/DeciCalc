function check_triangle(s1,s2,s3){

if (s1==s2 && s2==s3) {
    return document.getElementById("result").innerHTML="equilateral" //if true will give result
    
}
else if (+s1^2 + +s2^2 == s3^2|| +s2^2 + +s3^2==s1^2|| +s3^2 + +s1^2==s2^2){
    return document.getElementById("result").innerHTML="right angled isoceles"
} 
else if (s1==s2 || s2==s3){
    return document.getElementById("result").innerHTML="isoceles"
}

else if (s1^2==s2^2+s3^2 ||s2^2==s3^2+s1^2|| s3^2==s1^2+s2^2 ){
    return document.getElementById("result").innerHTML="Right angled Triangle"
}


else{
    document.getElementById("result").innerHTML="scalene"
}
}




function on_click(){

    var s1=document.getElementById("in1").value
    var s2=document.getElementById("in2").value
    var s3=document.getElementById("in3").value

if(check_num(s1,s2,s3) == false){
    alert("false");
    document.getElementById("pop").innerHTML = 'Only Numeric is Allowed';
    document.getElementById("result").value = '';  
}
if(check_num(s1,s2,s3) == true){
    document.getElementById('result').value = check_triangle(s1,s2,s3); 
}
else{
    document.getElementById('pop').innerHTML = 'Only Numeric is Allowed';
    document.getElementById("result").value = '';  //Returns an empty string if input not validated
    return false;
}
}





function check_num(s1,s2,s3){
    if ( (s1==0,s2==0 ,s3==0))
    {
        s1=parseInt ;
        s2= parseInt;
        s3= parseInt;
    } 
    if(s1==0 && s2==0 && s3==0 && isNaN(s1) && isNaN(s2) && isNaN(s3) ){ 
       s1=parseFloat; s2=parseFloat; s3=parseFloat;
         document.getElementById('pop').innerHTML = 'Only Numeric is Allowed ';
        return false; //return false if any input is not number
    }
    else if(!isNaN(s1)){ 
        if(!isNaN(s2)){
            if(!isNaN(s3)){
            return true;}
        }
        document.getElementById('pop').innerHTML = 'Only Numeric is Allowed'; 
        return false; 
    }
    else{
        document.getElementById('pop').innerHTML = 'Only Numeric is Allowed';
        document.getElementById("result").value = 'Operation terminated'; 
        return false;
    } 
}

/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
