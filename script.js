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

//time for top of page
function displayDate() {
  var current = moment().format("dddd, MMMM Do");
  $("#currentDay").text(current);
}
displayDate();

  comHour();
  var time = setInterval(compareHour, 15000);

  $("#hr-9 .description").val(localStorage.getItem("hr-9"));
  $("#hr-10 .description").val(localStorage.getItem("hr-10"));
  $("#hr-11 .description").val(localStorage.getItem("hr-11"));
  $("#hr-12 .description").val(localStorage.getItem("hr-12"));
  $("#hr-13 .description").val(localStorage.getItem("hr-13"));
  $("#hr-14 .description").val(localStorage.getItem("hr-14"));
  $("#hr-15 .description").val(localStorage.getItem("hr-15"));
  $("#hr-16 .description").val(localStorage.getItem("hr-16"));
  $("#hr-17 .description").val(localStorage.getItem("hr-17"));

});



