$(document).ready(function () {
  var currentHour = moment().hour();
  var timeBlocks = $(".time-block");

  $(timeBlocks).each(function() {
     var timeBlock = $(this);
     var timeBlockId = timeBlock.attr('id');
     var hour = parseInt(timeBlockId.split('-')[1])
   if (hour < currentHour) {
      console.log('add .past class')
      timeBlock.addClass("past")
    } else if (hour === currentHour) {
      console.log('add .present class')
    } else {
      console.log('add .future class')
    }

  })
});

//$(".time-block").each(function() {
//create a function in doc.ready that gets current time from moment and need to
//be able to loop over every time block, use class
// each time it loops it stores the time that each block is set to
//and compares that time to the current time
//then based off how it compares it that is past present or future, it applies
//proper class that gives the block the right color

//var currentDay= document.getElementById("currentDay")
//document.querySelector()(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//moment().format("dddd, MMMM Do YYYY, h:mm:ss a");


