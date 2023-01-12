var totalFormSubmitted = 0;
var submittedData = [];

function formData(event) {
  event.preventDefault();
  totalFormSubmitted++;
  submittedData.push(document.getElementById("myForm").elements[0].value);
  document.getElementById("total-count").innerText = totalFormSubmitted;
  document.getElementById("display-data").innerText = submittedData;
  var form = document.getElementById("myForm");
  form.reset();
}
