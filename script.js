$(document).ready(function () {
  //schedule an event
  $(".saveBtn").on("click", function () {
    //get the text
    const hour = $(this).siblings(0).text();
    const desc = $(this).parent().children().eq(1).val();
    const timeBlockID = $(this).parent().attr("id");
    //set the item in localStorage
    localStorage.setItem(timeBlockID, desc);
  });

  //get current moment
  const currentHour = moment().hours();
  //loop through timeblocks
  $(".time-block").each((index, timeBlock) => {
    const hour = parseInt(timeBlock.id.split("-")[1]);
    //add css class to each timeblock based on timing
    if (hour < currentHour) {
      $(timeBlock).addClass("past");
    } else if (hour > currentHour) {
      $(timeBlock).addClass("future");
    } else {
      $(timeBlock).addClass("present");
    }

    //display appointment text from local storage
    const appointment = localStorage.getItem(timeBlock.id);
    const textArea = $(timeBlock).children().eq(1);
    textArea.val(appointment);
  });

  //show current date
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
