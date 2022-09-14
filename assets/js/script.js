// shows the date at the top of the page
$("#currentDay").text("Today is " + moment().format("dddd, MMMM Do"));

// keeping the save button in a vareable
let saveBtn = $(".save-btn");

// when a save button is clicked it finds which one and saves it to local storage
saveBtn.on("click", function () {
  let hour = $(this).siblings(".hour").text();
  let userNote = $(this).siblings(".time-block").val();
  localStorage.setItem(hour, userNote);
});
