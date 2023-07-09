//This function is used to check the number of input elements of html.

var all_input = document.getElementsByTagName('input'); //takes html input type data
var text_box_count = 0; //to count text input boxes
var text_box_store = []; //to store input text boxes
var button_counter = 0; //to count input button
var button_store =[]; //to store input button 
var click_counter = 0; //button click counter
var disabled_box_count = 0; //to count disabled box
var disabled_store = []; //to store disabled button


function test_ui_comp(){
    

try{

    for(let i =0; i<all_input.length; i++){ 
        if(all_input[i].type == 'text'){ 
            text_box_count++; 
            text_box_store.push(all_input[i]); 
        }
        if(all_input[i].type == 'button'){
            button_counter++;
            button_store.push(all_input[i]);
        }
        if(all_input[i].disabled)
        {
            if(all_input[i].type == 'text')
            {
                disabled_box_count++;
                disabled_store.push(all_input[i]);
            }
        }
}      
}
catch(error){
    console.log("Error in UI test")
}

    


try{ for(let i = 0; i<button_store.length; i++){ 
    if(button_store[i].onclick){ 
        click_counter++; 
    }
}}
catch(error){
    console.log("Error in number of click ")
}



   
//Presenting all data using console

    console.log( "No of input text box=",text_box_count);
    console.log(  "No of input buttons=",button_counter );
    console.log(  "No of clicks working=",click_counter );
    console.log(  "No of disabled input text box=",disabled_box_count );
    
}

function html2_test(){try{
        allto();
    }
    catch(err){
        console.log("error accured in testin arithmetic functions");
    }
    try{
        test_ui_comp();
    }
    catch(err){
        console.log("error accured in testing ui comp ");
    }
    
    try{
        score();
    }
    catch(err){
        console.log("error accured in testing ui comp ")
    }
    
}

