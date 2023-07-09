


function check_triangle(s1,s2,s3){
    if (+s1 + +s2> +s3 && +s2  +  +s3> s1 && +s1 + +s3> +s2)
{       
    if (s1==s2 && s2==s3)
    {return document.getElementById("result").innerHTML="equilateral";

    }
    
        if (   s1==s2 || s2==s3 || s1==s3  ){
        return document.getElementById("result").innerHTML="isoceles"
    }
    
    if (s1^2>=s2^2+s3^2||s2^2>=s3^2+s1^2|| s3^2>=s1^2+s2^2 ){
        return document.getElementById("result").innerHTML="Right angled Triangle"
    }
   
}
    
    else{
        document.getElementById("result").innerHTML="not a triangle"
    }
    }
    
    

function check_equi(){
    if (+s1 + +s2> +s3 && +s2  +  +s3> s1 && +s1 + +s3> +s2)
//equilateral tri check
    if (s1==s2 && s2==s3)
    return document.getElementById("result").innerHTML="equilateral";

}

function check_isoceles(){
    if ( s1==s2 || s2==s3 || s1==s3)
    return document.getElementById("result").innerHTML="isoceles";

}












    // function check_triangle(s1,s2,s3){

    //     if (s1==s2 && s2==s3) {
    //         return document.getElementById("result").innerHTML="equilateral" //if true will give result
            
    //     }
    //     else if (+s1 + +s2 == s3|| +s2 + +s3==s1|| +s3 + +s1==s2){
    //         return document.getElementById("result").innerHTML="right angled isoceles"
    //     } 
    //     else if (s1==s2 || s2==s3){
    //         return document.getElementById("result").innerHTML="isoceles"
    //     }
        
    //     else if (s1^2==s2^2+s3^2 ||s2^2==s3^2+s1^2|| s3^2==s1^2+s2^2 ){
    //         return document.getElementById("result").innerHTML="Right angled Triangle"
    //     }
        
        
    //     else{
    //         document.getElementById("result").innerHTML="scalene"
    //     }
    //     }
        



    
    
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
    
























// //This function is used to check the number of input elements of html.

// var all_input = document.getElementsByTagName('input'); //takes html input type data
// var text_box_count = 0; //to count text input boxes
// var text_box_store = []; //to store input text boxes
// var button_counter = 0; //to count input button
// var button_store =[]; //to store input button 
// var click_counter = 0; //button click counter
// var disabled_box_count = 0; //to count disabled box
// var disabled_store = []; //to store disabled button


// function test_ui_comp(){
    

// try{

//     for(let i =0; i<all_input.length; i++){ 
//         if(all_input[i].type == 'text'){ 
//             text_box_count++; 
//             text_box_store.push(all_input[i]); 
//         }
//         if(all_input[i].type == 'button'){
//             button_counter++;
//             button_store.push(all_input[i]);
//         }
//         if(all_input[i].disabled)
//         {
//             if(all_input[i].type == 'text')
//             {
//                 disabled_box_count++;
//                 disabled_store.push(all_input[i]);
//             }
//         }
// }      
// }
// catch(error){
//     console.log("Error in UI test")
// }

    


// try{ for(let i = 0; i<button_store.length; i++){ 
//     if(button_store[i].onclick){ 
//         click_counter++; 
//     }
// }}
// catch(error){
//     console.log("Error in number of click ")
// }



   
// //Presenting all data using console

//     console.log( "No of input text box=",text_box_count);
//     console.log(  "No of input buttons=",button_counter );
//     console.log(  "No of clicks working=",click_counter );
//     console.log(  "No of disabled input text box=",disabled_box_count );
    
// }

// function html2_test(){try{
//         allto();
//     }
//     catch(err){
//         console.log("error accured in testin arithmetic functions");
//     }
//     try{
//         test_ui_comp();
//     }
//     catch(err){
//         console.log("error accured in testing ui comp ");
//     }
    
//     try{
//         score();
//     }
//     catch(err){
//         console.log("error accured in testing ui comp ")
//     }
    
// }


 
 
 
 
 
 
 
 
 
 
 
//      /*
//      console.log(input_text);
//      console.log(input_text_element);
//      console.log(button_store);
//      console.log(button_store_element);
//      input_text_element[0].value=html_test_case[0][0];
//      input_text_element[1].value=html_test_case[0][1];
//  button_store_element[0].click();
//  if (input_text_element[2].value==html_test_case[0][2]) {
//      console.log("ans is right");
//  }
//     else {
//      console.log("wrong");}
//          c=add(a,b)
//      }*/





// //To check number of elements

// // var all_input = document.getElementsByTagName("input"); // input from html type
// // var no_of_text = 0;  //counts textbox
// // var no_of_button = 0 //counts no of button
// // var  disabled_box=0;
// // var disabled_store = [];
// // var all_text = [];
// // var all_button = [];
// // clickcounter=0;
// // function test_ui_comp() {
// // try {
// //     for (i = 0; i < all_input.length; i++) {
// //         if (all_input[i].type == "text") {
// //             all_text.push(all_input[i])
// //             no_of_text++;
// //         }
// //          if (all_input[i].type == "button") {
// //             all_button.push(all_input[i])
// //             no_of_button++;
// //         }
// //     if (all_input[i].disabled){
// //         disabled_box++;
// //         disabled_box.push(all_input[i]);
// //     }
// // }}
// // catch (error) {
// //     console.log("Error in UI Comp");
// // }
// // try{ for(let i = 0; i<all_button.length; i++){ // for loop to go through each button
// //     if(all_button[i].onclick){ // clicks button to check if working
// //         cli++; // increment if button clicked
// //     }
// // }}
// // catch (err) {
// //     console.log("Error ");
// // }



// // console.log("No of disabled text box",disabled_box)
// // console.log("No of Input Text:", no_of_text);
// // console.log("No of Button:" , no_of_button);
// // console.log("No of Buttons clicked:" , clickcounter);
// // }


// // function html2_test(){

// // try{
// //     test_ui_comp();
// // }
// // catch(err){
// //     console.log("error accured in testing ui comp ");
// // }

// // try{
// //     allto();
// // }
// // catch(err){
// //     console.log("error accured in testin arithmetic functions");
// // }


// // }











































// // // //VARIOUS TEST CASES


// // // sub_pass_case =[[26,1,25], [24,2,22], [-12,-1,-11], [10.2,10.6,-0.4000], [-1,1,-2.0000], [52.5555,-63.2222,115.7777], [-6.56,-8.7,2.1400], [52.5555,-63.2222,115.7777]];
// // // sub_fail_case = [["g",1,25], [24,2,26], [12,-1,-11], [10.2,"popo",-0.4000], [1,1,-2.0000], [52.5555,63.2222,115.7777], [-8,-8.7,2.1400], [52.5555,-6,115.7777]];

// // // mul_pass_case = [[1,1,1], [1,-2,-2], [-1,-1,1], [5,2,10], [-15,6,-90], [20,-20,-400], [7,9,63], [-1,-1,1]];
// // // mul_fail_case =[[1,1,0], [1,2,-2], [-1,1,1], [5,"-rtt",10], [-4,6,-90], [20,"uuu",-400], [-7,9,63], [-1,1,1]];

// // // div_pass_case = [[2.4564,2,1.2282], [8,2,4], [10,3,3.3333], [55,5,11], [1,1,1], [0,1,0], [97.45567,24.5678,3.9668], [1,1,1]];
// // // div_fail_case = [[2.4564,2.5657,1.2282], [8,"tt",4], [10,0.4563,3.3333], [3355,5,11], ["ere",1,1], [0,"o",0], [9,0,""], [21,1,1]];







// // // add_pass_case = [[26,1,27], [24,-2,22], [-12,-1,-13], [10.2,10.6,20.8], [-1,1,0], [52.5555,-63.2222,-10.6667], [-6.56,-8.7,-15.2600], [52.5555,-63.2222,-10.6667]];
// // // add_fail_case = [[26,"a",27], ["dfd",-2,22], [-12,1,-13], [10,10.6,20.8], [-1,0,0], [52.5555,"-erere",-10.6667], [-6.56,8.7,-15.2600], [52.5555,63.2222,-10.6667]];



// // // var y1 = 0; 
// // //  var y2 = 0;

// // // function score(){
// // // merge=y1+y2;
// // // console.log(`your total score is ${merge}`);


// // // }

// // // function add_pass(){
// // //    let x=0;
// // //     for (let state of add_pass_case){ 
// // //         var num1 =state[x]; var num2 = state[x+1]; var num3 =state[x+2];
// // //         if (Math.abs(add(num1, num2)- num3.toFixed(4)) <= 0.0001 )
// // //         { y1++;
// // //             if(y1 == 8){
// // //                 console.log(`Congratulations ! Given all ${y1} add_pass_cases are valid`)  
// // //                 return true; 
// // //             }
// // //         }
// // //         else {
// // //             console.log(` Error ! at sum  ${state[x+2]} \n Cannot Move forward `)
// // //             return false;} }  
// // //  }
// // // //addition fail test casesvar 

// // // function add_fail(){
// // //     let x=0;
// // //     for (let state of add_fail_case){ //for loop to go through each element in matrix
// // //         var num1 = state[x];
// // //         var num2 = state[x+1];
// // //         var num3 = state[x+2];
// // //         if (Math.abs(add(num1, num2) - num3)!= 0.0001 || Math.abs(add(num1, num2) - num3) >= 0.0001 ){ //to validate test cases 
// // //             y2++;
// // //             if(y2 == 8){
// // //                 console.log(`Congratulations ! Given all the ${y2} add_fail_test cases are valid`)
// // //                 return true; //returns true if all cases fail
// // //             }
// // //         }
// // //         else { console.log(` Error ! at sum  ${state[x+2]} \n Cannot Move forward `)
// // //              return false;
// // //         }  }}






















// // // //RUNS ALL TEST FUNCTION TOGETHER




// // // function allto(){
// // //    try{  add_pass();
   
// // //    }
// // //    catch(error){
// // //        console.log("A fatal Error Occurred")
// // //    }

// // //    try{ add_fail();}
// // //    catch(error){
// // //        console.log("A fatal Error Occurred")
// // //    }
   
// // //    try{ sub_pass();}
// // //    catch(error){
// // //        console.log("A fatal Error Occurred")
// // //    }
   
// // //    try{ sub_fail();}
// // //    catch(error){
// // //        console.log("A fatal Error Occurred")
// // //    }
   
// // //    try{ mul_pass();}
// // //    catch(error){
// // //        console.log("A fatal Error Occurred")
// // //    }
   
// // //    try{ mul_fail();}
// // //    catch(error){
// // //        console.log("A fatal Error Occurred")
// // //    }
   
// // //    try{ div_pass();}
// // //    catch(error){
// // //        console.log("A fatal Error Occurred")
// // //    }
   
// // //    try{ div_fail();}
// // //    catch(error){
// // //        console.log("A fatal Error Occurred")
// // //    }

// // // }
// // // // function add_pass(){
// // // //    let x = 0; var y = 0; 
// // // //    for (let state of add_pass_case){ 
// // // //        var num1 =state[x]; var num2 = state[x+1]; var num3 =state[x+2];
// // // //        if (Math.abs(add(num1, num2)- num3.toFixed(4)) <= 0.0001 )
// // // //        { y++;
// // // //            if(y == 8){
// // // //                console.log(`Congratulations ! Given all ${y} add_pass_cases are valid`)
// // // //                return true; 
// // // //            }
// // // //        }
// // // //        else {
// // // //            console.log(` Error ! at sum  ${state[x+2]} \n Cannot Move forward `)
// // // //            return false;
// // // //        }       
// // // //    }
   
// // // // }



// // // //subtraction pass test cases
// // // function sub_pass(){
// // //    let x = 0; var y = 0; 
// // //    for (let state of sub_pass_case){ 
// // //        var num1 =state[x]; var num2 = state[x+1]; var num3 =state[x+2];
// // //        if (Math.abs(subtract(num1, num2)- num3.toFixed(4)) <= 0.0001 )
// // //        { y++;
// // //            if(y == 8){
// // //                console.log(`Congratulations ! Given all ${y} sub_pass_cases are valid`)
// // //                return true; 
// // //            }
// // //        }
// // //        else {
// // //            console.log(` Error ! at difference  ${state[x+2]} \n Cannot Move forward `)
// // //            return false;
// // //        }       
// // //    }
// // // }

// // // //subtraction fail test cases
// // // function sub_fail(){
// // //    let x = 0; var y = 0; 
// // //    for (let state of sub_fail_case){ //for loop to go through each element in matrix
// // //        var num1 = state[x];
// // //        var num2 = state[x+1];
// // //        var num3 = state[x+2];
// // //        if (Math.abs(subtract(num1, num2) - num3)!= 0.0001 || Math.abs(subtract(num1, num2) - num3) >= 0.0001 ){ //to validate test cases 
// // //            y++;
// // //            if(y == 8){
// // //                console.log(`Congratulations ! Given all ${y} sub_fail_test cases are correct`)
// // //                return true; //returns true if all cases fail
// // //            }
// // //        }
// // //        else {
           
// // //            return false;
// // //        }       
// // //    }
// // // }

// // // // multiplication pass test cases
// // // function mul_pass(){
// // //    let x = 0; var y = 0; 
// // //    for (let state of mul_pass_case){ 
// // //        var num1 =state[x]; var num2 = state[x+1]; var num3 =state[x+2];
// // //        if (Math.abs(multiply(num1, num2)- num3.toFixed(4)) <= 0.0001 )
// // //        { y++;
// // //            if(y == 8){
// // //                console.log(`Congratulations ! Given all ${y} mul_pass_cases are valid`)
// // //                return true; 
// // //            }
// // //        }
// // //        else {
// // //            console.log(` Error ! at multiplication  ${state[x+2]} \n Cannot Move forward `)
// // //            return false;
// // //        }       
// // //    }
// // // }

// // // // multiplication fail test cases
// // // function mul_fail(){
// // //    let x = 0; var y = 0; 
// // //    for (let state of mul_fail_case){ //for loop to go through each element in matrix
// // //        var num1 = state[x];
// // //        var num2 = state[x+1];
// // //        var num3 = state[x+2];
// // //        if (Math.abs(multiply(num1, num2) - num3)!= 0.0001 || Math.abs(multiply(num1, num2) - num3) >= 0.0001 ){ //to validate test cases 
// // //            y++;
// // //            if(y == 8){
// // //                console.log(`Congratulations ! Given all the ${y} mul_fail_test cases are valid`)
// // //                return true; //returns true if all cases fail
// // //            }
// // //        }
// // //        else {
           
// // //            return false;
// // //        }       
// // //    }
// // // }
// // // // division pass test cases
// // // function div_pass(){
// // //    let x = 0; var y = 0; 
// // //    for (let state of div_pass_case){ 
// // //        var num1 =state[x]; var num2 = state[x+1]; var num3 =state[x+2];
// // //        if (Math.abs((divide(num1, num2)- num3).toFixed(4)) <= 0.0001 && divide(num1,num2)==num3 )
// // //        { y++;
// // //            if(y == 8){
// // //                console.log(`Congratulations ! Given all ${y} div_pass_cases are valid`)
// // //                return true; 
// // //            }
// // //        }
// // //        else {
// // //            console.log(` Error ! at division  ${state[x+2]} \n Cannot Move forward `)
// // //            return false;
// // //        }       
// // //    }
// // // }

// // // // division fail test cases
// // // let x = 0; var y = 0; 
// // // function div_fail(){
// // //     let x = 0; var y = 0; 
// // //    for (let state of div_fail_case){ //for loop to go through each element in matrix
// // //        var num1 = state[x];
// // //        var num2 = state[x+1];
// // //        var num3 = state[x+2];
// // //        if (Math.abs(divide(num1, num2) - num3)!= 0.0001 || Math.abs(divide(num1, num2) - num3) >= 0.0001 ){ //to validate test cases 
// // //            y++;
// // //            if(y == 8){
// // //                console.log(`Congratulations ! Given all the ${y} division_fail_test cases are valid`)
// // //                return true; //returns true if all cases fail
// // //            }
// // //        }
// // //        else {
           
// // //            return false;
// // //        }       
// // //    }
// // // }

// // // function start(){
// // //     arr=10;
// // //     for( let x=1 ; x=arr; x++){
// // //     if(x==8){
// // //         console.log(x);
// // //         return true;
// // //     }
// // //     else {
// // //         return false
// // //     }
    
// // //     }
// // // }