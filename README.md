# Study-JS-Timer
* Class 45 JS course Udemy.
* HTML timer with "stop", "start" and "reset".

&nbsp;
# New Functions
* ### setInterval( __function__ , __time__ )
    * executes "__function__" every "_time_" in miliseconds.

&nbsp;
* ### setTimeout( __function__ , __time__ )
    * executes "__function__" execution after "__time__" interval in miliseconds.

&nbsp;
* ### clearInterval( __function__)
    * Stops "__function__" execution.

&nbsp;
# New HTML interactions
* ### document.addEventListener("click",function(__event__))
~~~ javascript
document.addEventListener("click",function(event){

    const element =  event.target;

    if(element.classList.contains("Button Class"))
    {
        Action...
    }
})
~~~ 
* __event.target -->__ Returns the target resposible from the event (in this case the button pressed)

&nbsp;
* __element.classList.contains("Button Class Name") -->__ Returns true if the "Button Class" is contained into the __event.target__ (element) class list.