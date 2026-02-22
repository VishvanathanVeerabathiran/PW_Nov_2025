
//Call back function

function toCheckTicketAvailability(isAvailable, phoneCallBack) {
    console.log("Check Ticket Availability is Yes");
    setTimeout(() => { if (isAvailable === true) { console.log("Ticket is available and calling customer"); phoneCallBack(); } }, 2000);
}
function toGetBookTicket() { console.log("Ticket is booked"); }
toCheckTicketAvailability(true, toGetBookTicket);

function movieAvailability(moviename, callback, callback2) 
{ 
    //Passing the function name as parameter
    console.log("Checking movie name");
    setTimeout(() => { console.log(`Movie name is ${moviename}`); if (moviename === "Avenger") { callback(); } else { callback2(); } }, 2000);
    // Two seconds timeout    
        }
    function playMovie() { console.log("Playing the movie"); }
    function pauseMovie() { console.log(`Pausing the movie`); }
    movieAvailability("Avengers", playMovie, pauseMovie)
    movieAvailability("Avenger", playMovie, pauseMovie)