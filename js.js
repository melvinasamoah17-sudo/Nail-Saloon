const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const service = document.getElementById("service").value;

  alert("Booked for " + name + " on " + date + " (" + service + ")");
  form.reset();
});
