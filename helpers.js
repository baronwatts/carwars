//helpers.js 

//this file contains useful helper functions for various tasks

//functions list:
//randnum(min, max);
//getarrayitem(arr); //accepts an array
//isodd(num);
//iseven(num);
//genhexcolor();
//shufflearray(array); 
//removeitem(array, item);
//hasitem(array, item);


//generates a random number between min and max
function randnum(min, max){
    
    return Math.round(Math.random() * (max-min)) + min;
    
}//end randnum()

//gets a random item from specified array
function getarrayitem(arr){
    
    return arr[Math.floor(Math.random() * arr.length)];
    
}//end getarrayitem()

//tell if a number is odd
function isodd(num){
    
    if(num % 2 != 0){
    //if the remainder of num / 2 is not 0
        return true;
    }else{
        return false;
    }
    
}//end isodd()

//tell if a number is even
function iseven(num){
    
    if(num % 2 != 0){
    //if the remainder of num / 2 is not 0
        return false;
    }else{
        return true;
    }
    
}//end iseven()    

//generate a hex color
function genhexcolor(){
    var hexarray = '1234567890ABCDEF';
        hexarray = hexarray.split('');
    var hexcolor = '#';
    for(var i=0; i<6; i++){
        hexcolor += hexarray[Math.floor(Math.random()*hexarray.length)];
    }
    return hexcolor;
}//end genhexcolor()


//randomize an array
function shufflearray(array){
    for(var i = array.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//remove an item from an array
function removeitem(array, item){
    var i = array.indexOf(item);
    if(i != -1) {
        array.splice(i, 1);
    }
    return array;
}
    
//check if an array has an item in it    
function hasitem(array, item){
    var i = array.indexOf(item);
    if(i != -1) {
        return true;
    }else{
        return false;   
    }
}





