// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//document.body.onload = addElement;
/*
//Div Ids for hour blocks based on 24 hour clock
var arrHourId = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
var infoEl = document.createElement("div");
infoEl.setAttribute

var dayContainerEle = $("#daycontainer");
//$("#daycontainer").appendChild(infoEl);
infoEl.setAttribute("id", "hour-9");
infoEl.setAttribute("class", "row time-block past");
dayContainerEle.append(infoEl);
infoEl.textContent = "ahhhh":
*/

var eleId = "hour-9";
var myCreatedElement = document.createElement("div");
var myContainer = document.getElementById("daycontainer");

//setAttribute() is used to create attributes or change it:
myCreatedElement.setAttribute("id", eleId);
myCreatedElement.setAttribute("class", "row time-block");

//here you add the element you created using appendChild()
myContainer.appendChild(myCreatedElement);

var secMyContainer = document.getElementById(eleId);
myCreatedElement = document.createElement("div");
myCreatedElement.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
myCreatedElement.textContent = "9AM";
 //   .setAttribute("class", "col-2 col-md-1 hour text-center py-3");
secMyContainer.appendChild(myCreatedElement);


/*
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

function addElement()
{
    

    function addElement() {
        // create a new div element
        const newDiv = document.createElement("div");

        // and give it some content
        const newContent = document.createTextNode("Hi there and greetings!");

        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
    }
}

var currentDate = dayjs();
var dayNo = currentDate.format('D').toString();
var lastNum = dayNo.substring(dayNo.length, 1);
var daySuffix = "";

switch (lastNum)
{
    case "1":
        daySuffix = "st";
        break;
    case "2":
        daySuffix = "nd";
        break;
    case "3":
        daySuffix = "rd";
        break;
    default:
        daySuffix = "th";
        break;
}
console.log(lastNum);
$('#currentDay').text(currentDate.format('dddd, MMMM D') + daySuffix);


function highlighterAction()
{
    // actually do the highlighting stuff here
}

function highlighter() {
    /*
      The short pause allows any required callback functions
      to execute before actually highlighting, and allows
      the JQuery $(document).ready wrapper to finish.
     */

/*

setTimeout(function () {
        highlighterAction();
    }, 200);
}
*/
/*
  Only trigger the function after document fully loaded.  This is
  necessary for cases where page load takes a significant length
  of time to fully load.
*//*
if (document.readyState == 'complete') 
{
    highlighter();
}
else
{
    document.onreadystatechange = function ()
    {
        if (document.readyState === "complete")
        {
            highlighter();
            //object.addEventListener("click", myScript);
        }
    }
}
*/
