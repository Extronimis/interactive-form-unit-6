//Name
document.getElementById("name"). focus();
let otherJob = document.getElementById("other-job-role");
otherJob.style.display = "none";
var jobRole = document.getElementById("title");

//Other jobs
function otherJobsInput() {
  let jobRoleValue = jobRole.value;
  if (jobRoleValue === "other") {
    document.getElementById("other-job-role").style.display = "block";
 }else {
  document.getElementById("other-job-role").style.display = "none";
}
}
document.getElementById("title").addEventListener("change", otherJobsInput);

//Color selection
let colors = document.getElementById("color");
colors.disabled = true;
let design = document.getElementById("design");
function displayColors() {
  colors.disabled = false;
  for (var i=0; i< colors.options.length; i++) {
    if(colors.options[i].dataset.theme ===  design.value) {
      colors.options[i].style.display = "block";
      colors.value = '';
} else {
    colors.options[i].style.display = "none";
}
}
}
design.addEventListener("change", displayColors);

//Register for activities
let activitiesBox = document.getElementById("activities");
let total = document.getElementById("activities-cost");
let totalCost = 0;

//Cost
function addCost(event) {
  let dataCost = event.target.dataset.cost;
  let dataCostN = parseInt(dataCost);
  console.log(dataCost);
  console.log(dataCostN);
  if (event.target.checked == true) {
  totalCost = dataCostN + totalCost;
} else {
  totalCost = totalCost - dataCostN;
}
  total.innerHTML = `Total: $ ${totalCost}`;
}
activitiesBox.addEventListener("change", addCost);

//Payment type
let payWith = document.getElementById("payment");
let creditCard = document.getElementById("credit-card");
let paypal = document.getElementById("paypal");
let bitcoin = document.getElementById("bitcoin");

paypal.style.display = "none";
bitcoin.style.display = "none";
payWith.options[1].selected = true;


function switchPayment(event) {
  let payment = event.target.value;
  if ( payment === "paypal") {
  paypal.style.display = "block";
  bitcoin.style.display = "none";
}else {
  paypal.style.display = "none";
}  if (payment === "bitcoin") {
  bitcoin.style.display = "block";
  paypal.style.display = "none";
}else {
  bitcoin.style.display = "none";
} if (payment === "credit-card") {
  creditCard.style.display = "";
}else {
  creditCard.style.display = "none";
}
}
payWith.addEventListener("change", switchPayment);

//Variables for inputs
let names = document.getElementById("name");
let email = document.getElementById("email");
let activities = document.getElementById("activities-box");
let cardNum = document.getElementById("cc-num");
let zip = document.getElementById("zip");
let cvv = document.getElementById("cvv");
let form = document.querySelector("form");


function validator(event) {
  let nameHere = names.value;
  let emailHere = email.value;
  let cardHere = cardNum.value;
  let zipHere = zip.value;
  let cvvHere = cvv.value;
  const regexName = /(\S)+(\s)?(\S)?/;
  const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const regexCard = /^\d{13,16}$/;
  const regexZip = /^\d{5}$/;
  const regexCvv = /^\d{3}$/;
  if (regexName.test(nameHere)===false) {
    event.preventDefault();
    names.parentElement.classList.add("not-valid");
    names.parentElement.classList.remove("valid");
    names.parentElement.lastElementChild.style.display = "block";
  }else {
    names.parentElement.classList.add("valid");
    names.parentElement.classList.remove("not-valid");
    names.parentElement.lastElementChild.style.display = "none";
  }
  if (regexEmail.test(emailHere)===false) {
    event.preventDefault();
    email.parentElement.classList.add("not-valid");
    email.parentElement.classList.remove("valid");
    email.parentElement.lastElementChild.style.display = "block";
  }else{
    email.parentElement.classList.add("valid");
    email.parentElement.classList.remove("not-valid");
    email.parentElement.lastElementChild.style.display = "none";
  }
  if (totalCost <= 0) {
    event.preventDefault();
    activities.parentElement.classList.add("not-valid");
    activities.parentElement.classList.remove("valid");
    activities.parentElement.lastElementChild.style.display = "block";
  } else {
    activities.parentElement.classList.add("valid");
    activities.parentElement.classList.remove("not-valid");
    activities.parentElement.lastElementChild.style.display = "none";
  }
  if (creditCard.style.display === "" && regexCard.test(cardHere)===false){
    event.preventDefault();
    cardNum.parentElement.classList.add("not-valid");
    cardNum.parentElement.classList.remove("valid");
    cardNum.parentElement.lastElementChild.style.display = "block";
  }else {
    cardNum.parentElement.classList.add("valid");
    cardNum.parentElement.classList.remove("not-valid");
    cardNum.parentElement.lastElementChild.style.display = "none";
  }
  if (creditCard.style.display === "" && regexZip.test(zipHere)===false){
    event.preventDefault();
    zip.parentElement.classList.add("not-valid");
    zip.parentElement.classList.remove("valid");
    zip.parentElement.lastElementChild.style.display = "block";
  }else {
    zip.parentElement.classList.add("valid");
    zip.parentElement.classList.remove("not-valid");
    zip.parentElement.lastElementChild.style.display = "none";
  }
  if (creditCard.style.display === "" && regexCvv.test(cvvHere)===false ){
    event.preventDefault();
    cvv.parentElement.classList.add("not-valid");
    cvv.parentElement.classList.remove("valid");
    cvv.parentElement.lastElementChild.style.display = "block";
  }else {
    cvv.parentElement.classList.add("valid");
    cvv.parentElement.classList.remove("not-valid");
    cvv.parentElement.lastElementChild.style.display = "none";
  }
}
form.addEventListener("submit", validator);

let inputs = document.querySelectorAll("input");
inputs.forEach(input=> {
  input.addEventListener("focus", (event)=>{
  event.target.parentNode.classList.add("focus");
});
inputs.forEach(input=>{
  input.addEventListener("blur", (event)=>{
    event.target.parentNode.classList.remove("focus");
    event.target.parentNode.classList.add("blur");
  });
} );
});
function nameValidator(event) {
  let nameHere = names.value;
  const regexName = /(\S)+(\s)?(\S)?/;
  if (regexName.test(nameHere)===false) {
    event.preventDefault();
    names.parentElement.classList.add("not-valid");
    names.parentElement.classList.remove("valid");
    names.parentElement.lastElementChild.style.display = "block";
  }else {
    names.parentElement.classList.add("valid");
    names.parentElement.classList.remove("not-valid");
    names.parentElement.lastElementChild.style.display = "none";
  }
}
names.addEventListener("blur", nameValidator);

function emailValidator(event){
  let emailHere = email.value;
  const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (regexEmail.test(emailHere)===false) {
    event.preventDefault();
    email.parentElement.classList.add("not-valid");
    email.parentElement.classList.remove("valid");
    email.parentElement.lastElementChild.style.display = "block";
  }else{
    email.parentElement.classList.add("valid");
    email.parentElement.classList.remove("not-valid");
    email.parentElement.lastElementChild.style.display = "none";
  }
}
email.addEventListener("blur", emailValidator);
