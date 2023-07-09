//To check whether input is number or not
function check_num(num1,num2){ 
    if ( (num1==0,num2==0))
    {
        num1=parseInt ;
        num2= parseInt;
    }
    if( num1 == "" && num2 == "" && isNaN(num1) && isNaN(num2)  ){ 
        num1=parseFloat; num2=parseFloat;
         document.getElementById('popup').innerHTML = 'Only Numeric is Allowed ';
        return false; //return false if any input is not number
    }
    else if(!isNaN(num1)){ 
        if(!isNaN(num2)){
            return true;
        }
        document.getElementById('popup').innerHTML = 'Only Numeric is Allowed'; 
        return false; 
    }
    else{
        document.getElementById('popup').innerHTML = 'Only Numeric is Allowed';
        document.getElementById("result").value = ''; 
        return false;
    } 
}

function btn_to_add(num1, num2){             // Function to add two inputs from user
var num1 = document.getElementById("data1").value;
var num2 = document.getElementById("data2").value;


if(check_num(num1,num2) == false){
    document.getElementById('popup').innerHTML = 'Only Numeric is Allowed';
    document.getElementById("result").value = '';  
}
if(check_num(num1,num2) == true){
    document.getElementById('result').value = add(num1, num2); 
}
else{
    document.getElementById('popup').innerHTML = 'Only Numeric is Allowed';
    document.getElementById("result").value = '';  //Returns an empty string if input not validated
    return false;
}
}

function btn_to_sub(num1, num2){             // Function to add two inputs from user
var num1 = document.getElementById("data1").value;
var num2 = document.getElementById("data2").value;
if(check_num(num1,num2) == false){
    document.getElementById('popup').innerHTML = 'Only Numeric is Allowed';
    document.getElementById("result").value = ''; 
}
if(check_num(num1,num2) == true){
    document.getElementById('result').value = subtract(num1, num2); 
}
else{
    document.getElementById('popup').innerHTML = 'Only Numeric is Allowed';
    document.getElementById("result").value = ''; 
    return false;
}
}

function btn_to_mul(num1, num2){             // Function to add two inputs from user
var num1 = document.getElementById("data1").value;
var num2 = document.getElementById("data2").value;
if(check_num(num1,num2) == false){
    document.getElementById('popup').innerHTML = 'Only Numeric is Allowed';
    document.getElementById("result").value = '';
}
if(check_num(num1,num2) == true){
    document.getElementById('result').value = multiply(num1, num2); 
}
else{
    document.getElementById('popup').innerHTML = 'Only Numeric is Allowed';
    document.getElementById("result").value = ''; 
    return false;
}
}

function btn_to_div(num1, num2){            // Function to add two inputs from user
var num1 = document.getElementById("data1").value;
var num2 = document.getElementById("data2").value;
if(check_num(num1,num2) == false){
    document.getElementById('popup').innerHTML = 'Only Numeric is Allowed';
    document.getElementById("result").value = '';  
}
if(check_num(num1,num2) == true){
    document.getElementById('result').value = divide(num1, num2); 
}
else{
    document.getElementById('popup').innerHTML = 'Only Numeric is Allowed';
    document.getElementById("result").value = ''; 
    return false;
}
}

// Calculation between two input
function add(num1, num2){

sum = (parseFloat(num1) + parseFloat(num2)).toFixed(4);  //addition between two input
document.getElementById("result").value = sum;  
if(check_num(num1, num2) == true){
    document.getElementById('popup').innerHTML = '';
    return sum;
}
else{
    document.getElementById("result").value = '';  
}
}

 //subtraction between two input
function subtract(num1, num2){
sub = (parseFloat(num1) - parseFloat(num2)).toFixed(4);  
document.getElementById("result").value = sub;  //Returns value upto 4 decimal to the disabled input box
if(check_num(num1, num2) == true){
    document.getElementById('popup').innerHTML = '';
    return sub;
}   
else{
    document.getElementById("result").value = ''; 
}
}

 //Multiplication between two input
function multiply(num1, num2){
pro = (parseFloat(num1) * parseFloat(num2)).toFixed(4);   
document.getElementById("result").value = pro; 
if(check_num(num1, num2) == true){
    document.getElementById('popup').innerHTML = '';
    return pro;
}
else{
    document.getElementById("result").value = '';  
}
}

 //division between two input
function divide(num1, num2){
div = (parseFloat(num1) / parseFloat(num2)).toFixed(4);  
if(check_num(num1, num2) == true)
{
    if(div == 'NaN')
    {
        document.getElementById("result").value = 'Undefined';
        document.getElementById('popup').innerHTML = '';
        return 'NaN';
    }
    else if(!isNaN(div)){
        document.getElementById('popup').innerHTML = '';
        return div;
    }
}
else
    {
        document.getElementById("result").value = '';  
    }
}

function score(){ // This function is used to Calculate marks.
    merge=(y1/2)+(y2/2)+(y3/2)+(y4/2)+(y5/2)+(y6/2)+(y7/2)+(y8/2)+(text_box_count)+(button_counter/2)+(click_counter/2)+(disabled_box_count);
    console.log(`Congratulations! Your total score is ${merge} out of 69`);
    
    }
