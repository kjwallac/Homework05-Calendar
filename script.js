$(document).ready(function() {
//schedule an event
$(".saveBtn").on('click', function() {
    console.log('this button works at least');
    //get the text
    const hour = $(this).siblings(0).text();
    const desc = $(this).parent().children().eq(1).val();
    //set the item in localStorage
    localStorage.setItem(hour, desc);
    console.log({hour, desc});
});

});



$("#currentDay").text(moment().format("dddd, MMMM Do"));
