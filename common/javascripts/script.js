// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//document.body.onload = addElement;
//Create element ids to denote hour based on 24 hour clock
var arrHourId = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
var btnId;
//This is the class for the hour elements before the past/present/future indicator is added
var divHourClass = "row time-block";
var myCreatedElement;
//Convert to int so it can be compared as a number.

var currentHour = parseInt(dayjs().format("H"));

function init()
{
    setDateLabel();
    arrHourId.forEach(addElement)
    arrHourId.forEach(addBtnEventListener)
    //arrHourId.forEach(changeTextAreaColors);
    changeTextAreaColors();
    setTime();
    setAreaText();
}

function setDateLabel()
{
    //Get the day (number) of the current date
    var currentDate = dayjs();
    var dayNo = currentDate.format('D').toString();

    //Use day number to determine which suffix; st, nd, rd, or the, should be used
    let stNums = "1, 11, 21, 31";
    let ndNums = "2, 22";
    let rdNums = "3, 23";
    var daySuffix = "";

    if (stNums.includes(dayNo)) {
        daySuffix = "st";
    }
    else if (ndNums.includes(dayNo)) {
        daySuffix = "nd";
    }
    else if (rdNums.includes(dayNo)) {
        daySuffix = "rd";
    }
    else
    {
        daySuffix = "th";
    }

    //Set the text of the label to the day number with the determined suffix
    $('#currentDay').text(currentDate.format('dddd, MMMM D') + daySuffix);
}
  
function addElement(eleId) {

    //Get the hour from the element id to determine if the hour is am or pm
    var arrHourNum = eleId.split("-")
    var amPm = "PM";
    var hourNum = arrHourNum[1];

    //If the hour is < 12 or equals 24, the time is am, otherwise, it is pm
    if (arrHourNum[1] < 12 || arrHourNum[1] == 24) {
        amPm = "AM";
    }

    //We want to display standard time instead of military time. If the hour is > 12, subtract 12 from the number to get the standard hour.
    if (hourNum > 12) {
        hourNum = hourNum - 12;
    }

    /*
    Create dynamic HTML to append nodes for each hour to the "daycontainer" node, i.e.

    <div id="daycontainer" class="container-lg px-5">
        <div id="hour-11" class="row time-block future">
            <div class="col-2 col-md-1 hour text-center py-3">11AM</div>
            <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save">
                <i class="fas fa-save" aria-hidden="true"></i>
            </button>
        </div>
    </div>
    */

    //parent container the new node will be added to
    var myContainer;
    //the new node element
    //var myCreatedElement;

    /*
    Create the <div> for the hour container
        <div id="hour-11" class="row time-block future">
    */
    myContainer = document.getElementById("daycontainer");
    myCreatedElement = document.createElement("div");
    //Set the id and class
    myCreatedElement.setAttribute("id", eleId);
    myCreatedElement.setAttribute("class", divHourClass);
    //append to the parent container
    myContainer.appendChild(myCreatedElement);

    /*
    Create the column element for the hour label. This node is a child of the hour container, i.e. id=hour-9.

        <div class="col-2 col-md-1 hour text-center py-3">11AM</div>
    */
    myContainer = document.getElementById(eleId);
    myCreatedElement = document.createElement("div");
    //This node only need class and text content
    myCreatedElement.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
    myCreatedElement.textContent = hourNum + amPm;
    myContainer.appendChild(myCreatedElement);

    /*
    Create the column element for the text entry area. This node is a child of the hour container, i.e. id=hour-9.

        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    */
    myCreatedElement = document.createElement("textarea");
    //This node only need class and number of rows in the text area
    myCreatedElement.setAttribute("id", "txtarea" + eleId);
    myCreatedElement.setAttribute("class", "col-8 col-md-10 description");
    myCreatedElement.setAttribute("rows", "3");
    myContainer.appendChild(myCreatedElement);

    /*
    Create the column element for the save button. This node is a child of the hour container, i.e. id=hour-9.

        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        </button>
    */
    btnId = "btn" + eleId;
    myCreatedElement = document.createElement("button");
    //This node needs id, class, number of rows, and aria-label
    myCreatedElement.setAttribute("id", btnId);
    myCreatedElement.setAttribute("class", "btn saveBtn col-2 col-md-1");
    myCreatedElement.setAttribute("rows", "");
    myCreatedElement.setAttribute("aria-label", "save");
    myContainer.appendChild(myCreatedElement);

    /*
    Create the icon element for the save button. This node is a child of the button container, i.e. id=btnhour-9.

        <i class="fas fa-save" aria-hidden="true"></i>
    */
    myContainer = document.getElementById(btnId);
    myCreatedElement = document.createElement("i");
    myCreatedElement.setAttribute("class", "fas fa-save");
    myCreatedElement.setAttribute("aria-hidden", "true");
    myContainer.appendChild(myCreatedElement);
}

function addBtnEventListener(eleId)
{
    var btnId = "#btn" + eleId;
    $(document).on("click", btnId, function (event) {
        var txtAreaId = "txtarea" + eleId;
        var inputVal = $("#" + txtAreaId).val();
        localStorage.setItem(txtAreaId, inputVal);
        event.preventDefault();
    });
}

function changeTextAreaColors(i)
{
    //Change the color of the text areas. Grey for past,red for present, green for future.
    arrHourId.forEach(function (i) {
        myCreatedElement = document.getElementById(i);
        var idHour = i.split("-");
        //Convert to int so it can be compared as a number.
        var intIdHour = parseInt(idHour[1]);

        if (currentHour > intIdHour) {
            myCreatedElement.setAttribute("class", divHourClass + " past");
        }
        else if (currentHour < intIdHour) {
            myCreatedElement.setAttribute("class", divHourClass + " future");
        }
        else {
            myCreatedElement.setAttribute("class", divHourClass + " present");
        }
    });
}

function setTime()
{
    var timerInterval = setInterval(changeTextAreaColors, 60000);
}

function setAreaText()
{
    var textAreaVal = "";
    var txtAreaId;
    arrHourId.forEach(function (i)
    {
        txtAreaId = "txtarea" + i;
        textAreaVal = localStorage.getItem(txtAreaId);
        $("#" + txtAreaId).val(textAreaVal);
    })
}

init();