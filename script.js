//  1.Before Print Document 
window.addEventListener("beforeprint",myFunction);
function myFunction(){
    alert("You are about to print this document !");
}

// 2.  after Print 
function myFunction(){
    alert("This document is now begin printed By Bhanu");
}

// beforeunload Events
function myFunction(){
    return " if you Refresh the page you may lost data"
}

// 3.  onbeforeunload
window.addEventListener("beforeunload",
    function(event){
        event.returnValue = " if you reload you may change not save the data" 
    }
);

// 
function myFunction(){
    return "hello,word "
}



//  4. ON BLUR FUNCTION FOR INPUT 
function myFunction(){
    alert("Input field lost Focus");
}

// 5. CHANGE 
/* Assign an "onchange" event to an input element. */

function bhanuFunction(){
    var x =document.getElementById("upercase");
    x.value = x.value.toUpperCase();
}

// 6. Example 

function  chaitanyaFunction(){
    document.getElementById('clickevent').innerHTML="YOU CLICKED ME ";
}

// 7.Example

function oncopyFunction(){
    document.getElementById('oncopy').innerHTML="YOU COPY THE INPUT ";
}

// 8.Example

function oncutFunction() {
    document.getElementById('cut-event').innerHTML="CLICK ON INPUT AND CUT ";
}