//Yiwei Cao
// Add DOM selectors to target input and UL movie list
var inp = document.querySelector("input");
var myMovieList = document.querySelector("ul");
var inputArray = [];
var dict = []; // create an empty array for making a dictionary.
var timesWatched = {};
var table = document.getElementById("table");

// Example of a simple function that clears the input after a user types something in
function clearInput() {
    inp.value = "";
}

function addTable() {
    table.innerHTML = '';    
    //if the user's input (key) is already in the object, set its value to +1.
    if (timesWatched[inp.value]) {
        timesWatched[inp.value] += 1;
    }
    else {
        timesWatched[inp.value] = 1;
    }
    //inset the key and value of the object to table rows.
    for (key in timesWatched){
        var value = timesWatched[key];
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = key;
        cell2.innerHTML = value;
    }


    console.log(document.querySelectorAll("td").length);
    console.log(document.querySelectorAll("td").innerHTML);

}
function clearMovies() {
    // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
    myMovieList.innerHTML = '';
    
}

// This function is executed when the user clicks [ADD MOVIE] button.
function addMovie() {
    // Step 1: Get value of input
    var userTypedText = inp.value;
    // Step 2: Create an empty <li></li>
    var li = document.createElement("li"); // <li></li>

    // Step 3: Prepare the text we will insert INTO that li ^...example: Harry Potter
    var textToInsert = document.createTextNode(userTypedText);

    // Step 4: Insert text into li
    // <li>Harry Potter </li>
    li.appendChild(textToInsert);

    // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
    myMovieList.appendChild(li);

    // Add table rows for storing Movie history and times watched as user clicks the button.


    var li = document.querySelectorAll("LI");
    //console.log(li.length);//test
    inputArray.push(inp.value);//test
    console.log(inputArray);//test



    // Step 6: Call the clearInput function to clear the input field
    addTable();    
    clearInput();

}   

    









