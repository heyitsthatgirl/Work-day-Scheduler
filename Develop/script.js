// function only executes once all elements are loaded onto the page
$(function () {
  // display the date and time in the header
  $("#currentDay").text(dayjs().format("dddd MM/DD/YYYY hh:mma"));

  // text entry from each hourly block will be stored separately in local storage
  $("button").click(function () {
    var scheduleBlock = $(this).parent().attr("id");
    var txt = $(this).siblings("textarea").val();
    localStorage.setItem(scheduleBlock, txt);
  });

  // display the text from local storage in each schedule block
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));

  // color code the time blocks based on the real time of day
  function colorCode() {
    // get the current day and hour from dayjs
    var currentTime = dayjs().hour();
    console.log(currentTime);

    // compare the real time to the integer value of each time block
    // change the styling using the corresponding css class based on what time it is
    // remove any classes that should not be applied at that time
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id"));
      if (timeBlock < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (timeBlock === currentTime) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    });
  }
  colorCode();
});
