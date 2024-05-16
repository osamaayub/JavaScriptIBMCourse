





function submitFeedback() {
  alert("Thank You for your Valid Feeback");
  document.getElementById('userName').innerHTML = username;
  document.getElementById('userAge').innerHTML = age;
  document.getElementById('userEmail').innerHTML = email;
  document.getElementById('userJob').innerHTML = job;
  document.getElementById('userDesignation').innerHTML = designation;
  document.getElementById('userProductChoice').innerHTML=productType;
  document.getElementById('userFeedback').innerHTML=feedback;
}

const username = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;


const submitButton = document.getElementById('submitBtn');

submitButton.onclick = submitFeedback;

document.addEventListener("keydown",function(event){
  if(event.key==='enter'){
    submitFeedback();
  }

})