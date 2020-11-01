$(document).ready(function () {
  $(".saveBtn").on("click",function(){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,value);
  });
    function comHour(){
      var currentHour = moment().hour();
      var timeBlocks = $(".time-block");

  $(timeBlocks).each(function() {
     var timeBlock = $(this);
     var timeBlockId = timeBlock.attr('id');
     var hour = parseInt(timeBlockId.split('-')[1])
   if (hour < currentHour) {
      timeBlock.addClass("past")
    } else if (hour === currentHour) {
      timeBlock.removeClass("past")
      timeBlock.addClass("present")
    } else {
      timeBlock.removeClass("past")
      timeBlock.removeClass("present")
      timeBlock.addClass("future")
    }
    });
    }
  });

//time for top of page
function displayDate() {
  var current = moment().format("dddd, MMMM Do");
  $("#currentDay").text(current);
}
displayDate();

  comHour();
  var time = setInterval(compareHour, 15000);

//$(".time-block").each(function() {
//create a function in doc.ready that gets current time from moment and need to
//be able to loop over every time block, use class
// each time it loops it stores the time that each block is set to
//and compares that time to the current time
//then based off how it compares it that is past present or future, it applies
//proper class that gives the block the right color

//var currentDay= document.getElementById("currentDay")
//document.querySelector()(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
