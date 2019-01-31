console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

let colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "black"
]

// make a random number generator function
let rand = function(min, max) {
    // return a randomly generated number between the min parameter and the max parameter
}


// use a FOR/IN loop or a FOREACH to loop through the colors. try both, pick your favorite
for (let c in colors) {
    // create a div element
    
    // give it this styling
    // the background color that this loop is pointing at 

    // give it this styling

    // the background color that this loop is pointing at 

    // a height and width of a random number of pixels between 100 and 200

    // a border radius of 200

    // position absolute

    // a left of a random % between 0 and 100

    // a top of a random % between 0 and 100
    
    // i'll give you the fun animation for free
    newDot.style.transition = "transform 0.3s cubic-bezier(.17,.67,.54,1.33)";
    newDot.style.transform = "scale(0)";
    
    // make a timeout for 1 millisecond. this is sort of a hack that makes it apply the above styles first, 
    // and then the below styles. if you dont do it, the css transition old and new styles them doesn't work. 
    setTimeout(function() {
        newDot.style.transform = "scale(1)";
    }, 1)


    // append the new dot to the body
}

// now wrap that whole loop above in a WHILE loop or a basic FOR loop to make it run 3 times (so you get 3 of each dot)
// try both, pick your favorite

// now... if you want to keep a copy of this that you know is working, save a copy, and then...

// now remove both loops so you just have the code to make one dot, the color in the 0 position in the array, 
// and wrap it in a function. make that function run on an interval of 50 milliseconds

// now add a line to that function which removes the first item from the front of the array, and adds it to the end
// the result is that you use "red", and then you move it to the end, so now "orange" is first, then you use "orange"...