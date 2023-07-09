//VARIOUS TEST CASES

 add_pass_case = [[26,1,27], [24,-2,22], [-12,-1,-13], [10.2,10.6,20.8], [-1,1,0], [52.5555,-63.2222,-10.6667], [-6.56,-8.7,-15.2600], [52.5555,-63.2222,-10.6667]];
 add_fail_case = [[26,"a",27], ["dfd",-2,22], [-12,1,-13], [10,10.6,20.8], [-1,0,0], [52.5555,"-erere",-10.6667], [-6.56,8.7,-15.2600], [52.5555,63.2222,-10.6667]];

 sub_pass_case =[[26,1,25], [24,2,22], [-12,-1,-11], [10.2,10.6,-0.4000], [-1,1,-2.0000], [52.5555,-63.2222,115.7777], [-6.56,-8.7,2.1400], [52.5555,-63.2222,115.7777]];
 sub_fail_case = [["g",1,25], [24,2,26], [12,-1,-11], [10.2,"popo",-0.4000], [1,1,-2.0000], [52.5555,63.2222,115.7777], [-8,-8.7,2.1400], [52.5555,-6,115.7777]];

 mul_pass_case = [[1,1,1], [1,-2,-2], [-1,-1,1], [5,2,10], [-15,6,-90], [20,-20,-400], [7,9,63], [-1,-1,1]];
 mul_fail_case =[[1,1,0], [1,2,-2], [-1,1,1], [5,"-rtt",10], [-4,6,-90], [20,"uuu",-400], [-7,9,63], [-1,1,1]];

 div_pass_case = [[2.4564,2,1.2282], [8,2,4], [10,3,3.3333], [55,5,11], [1,1,1], [0,1,0], [97.45567,24.5678,3.9668], [1,1,1]];
 div_fail_case = [[2.4564,2.5657,1.2282], [8,"tt",4], [10,0.4563,3.3333], [3355,5,11], ["ere",1,1], [0,"o",0], [9,0,""], [21,1,1]];

 //Global Variables
var y1 = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;
var y5 = 0;
var y6 = 0;
var y7 = 0;
var y8 = 0;

//RUNS ALL TEST FUNCTION TOGETHER
function allto(){
    try{  add_pass();
    
    }
    catch(error){
        console.log("A fatal Error Occurred")
    }

    try{ add_fail();}
    catch(error){
        console.log("A fatal Error Occurred")
    }
    
    try{ sub_pass();}
    catch(error){
        console.log("A fatal Error Occurred")
    }
    
    try{ sub_fail();}
    catch(error){
        console.log("A fatal Error Occurred")
    }
    
    try{ mul_pass();}
    catch(error){
        console.log("A fatal Error Occurred")
    }
    
    try{ mul_fail();}
    catch(error){
        console.log("A fatal Error Occurred")
    }
    
    try{ div_pass();}
    catch(error){
        console.log("A fatal Error Occurred")
    }
    
    try{ div_fail();}
    catch(error){
    
    }  

}
function add_pass(){ 
    let x=0;
    for (let state of add_pass_case){ 
        var num1 =state[x]; var num2 = state[x+1]; var num3 =state[x+2];
        if (Math.abs(add(num1, num2)- num3.toFixed(4)) <= 0.0001 )
        { y1++;
            if(y1 == 8){
                console.log(`Congratulations ! Given all ${y1} add_pass_cases are valid`)
                return true; 
            }
        }
        else {
            console.log(` Error ! at sum  ${state[x+2]} \n Cannot Move forward `)
            return false;
        }       
    }
    
}

//addition fail test cases
function add_fail(){
    let x=0;
    for (let state of add_fail_case){ //for loop to go through each element in matrix
        var num1 = state[x];
        var num2 = state[x+1];
        var num3 = state[x+2];
        if (Math.abs(add(num1, num2) - num3)!= 0.0001 || Math.abs(add(num1, num2) - num3) >= 0.0001 ){ //to validate test cases 
            y2++;
            if(y2 == 8){
                console.log(`Congratulations ! Given all the ${y2} add_fail_test cases are valid`)
                return true; //returns true if all cases fail
            }
        }
        else {
            
            return false;
        }       
    }
}

//subtraction pass test cases
function sub_pass(){
    let x=0;
    for (let state of sub_pass_case){ 
        var num1 =state[x]; var num2 = state[x+1]; var num3 =state[x+2];
        if (Math.abs(subtract(num1, num2)- num3.toFixed(4)) <= 0.0001 )
        { y3++;
            if(y3 == 8){
                console.log(`Congratulations ! Given all ${y3} sub_pass_cases are valid`)
                return true; 
            }
        }
        else {
            console.log(` Error ! at difference  ${state[x+2]} \n Cannot Move forward `)
            return false;
        }       
    }
}

//subtraction fail test cases
function sub_fail(){
    let x = 0; 
    for (let state of sub_fail_case){ //for loop to go through each element in matrix
        var num1 = state[x];
        var num2 = state[x+1];
        var num3 = state[x+2];
        if (Math.abs(subtract(num1, num2) - num3)!= 0.0001 || Math.abs(subtract(num1, num2) - num3) >= 0.0001 ){ //to validate test cases 
            y4++;
            if(y4 == 8){
                console.log(`Congratulations ! Given all ${y4} sub_fail_test cases are correct`)
                return true; //returns true if all cases fail
            }
        }
        else {
            
            return false;
        }       
    }
}

// multiplication pass test cases
function mul_pass(){
    let x = 0; 
    for (let state of mul_pass_case){ 
        var num1 =state[x]; var num2 = state[x+1]; var num3 =state[x+2];
        if (Math.abs(multiply(num1, num2)- num3.toFixed(4)) <= 0.0001 )
        { y5++;
            if(y5 == 8){
                console.log(`Congratulations ! Given all ${y5} mul_pass_cases are valid`)
                return true; 
            }
        }
        else {
            console.log(` Error ! at multiplication  ${state[x+2]} \n Cannot Move forward `)
            return false;
        }       
    }
}

// multiplication fail test cases
function mul_fail(){
    let x = 0; 
    for (let state of mul_fail_case){ //for loop to go through each element in matrix
        var num1 = state[x];
        var num2 = state[x+1];
        var num3 = state[x+2];
        if (Math.abs(multiply(num1, num2) - num3)!= 0.0001 || Math.abs(multiply(num1, num2) - num3) >= 0.0001 ){ //to validate test cases 
            y6++;
            if(y6 == 8){
                console.log(`Congratulations ! Given all the ${y6} mul_fail_test cases are valid`)
                return true; //returns true if all cases fail
            }
        }
        else {
            
            return false;
        }       
    }
}
// division pass test cases
function div_pass(){
    let x = 0;
    for (let state of div_pass_case){ 
        var num1 =state[x]; var num2 = state[x+1]; var num3 =state[x+2];
        if (Math.abs((divide(num1, num2)- num3).toFixed(4)) <= 0.0001 && divide(num1,num2)==num3 )
        { y7++;
            if(y7 == 8){
                console.log(`Congratulations ! Given all ${y7} div_pass_cases are valid`)
                return true; 
            }
        }
        else {
            console.log(` Error ! at division  ${state[x+2]} \n Cannot Move forward `)
            return false;
        }       
    }
}

// division fail test cases
function div_fail(){
    let x = 0;
    for (let state of div_fail_case){ //for loop to go through each element in matrix
        var num1 = state[x];
        var num2 = state[x+1];
        var num3 = state[x+2];
        if (Math.abs(divide(num1, num2) - num3)!= 0.0001 || Math.abs(divide(num1, num2) - num3) >= 0.0001 ){ //to validate test cases 
            y8++;
            if(y8 == 8){
                console.log(`Congratulations ! Given all the ${y8} division_fail_test cases are valid`)
                return true; //returns true if all cases fail
            }
        }
        else {
            
            return false;
        }       
    }
}