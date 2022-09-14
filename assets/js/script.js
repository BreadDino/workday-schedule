// shows the date at the top of the page
$("#currentDay").text("Today is " + moment().format("dddd, MMMM Do"));

// keeping the save button in a vareable
let saveBtn = $(".save-btn");

// checks the time and changes the color of the blocks to match if it is in the past present or future
function colors() {
  let currentTime = moment().hours();

  $(".time-block").each(function () {
    let todoTime = parseInt($(this).attr("id"));

    if (currentTime > todoTime) {
      $(this).addClass("past");
    } else if (currentTime === todoTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
colors();

// finds the hour of each box and checks local storage for saved todos
function loadTodo() {
  $(".hour").each(function () {
    let todoHour = $(this).text();
    let previousTodo = localStorage.getItem(todoHour);
    if (todoHour !== null) {
      $(this).siblings(".time-block").val(previousTodo);
    }
  });
}
loadTodo();

// when a save button is clicked it finds which one and saves it to local storage
saveBtn.on("click", function () {
  let hour = $(this).siblings(".hour").text();
  let userNote = $(this).siblings(".time-block").val();
  localStorage.setItem(hour, userNote);
});
