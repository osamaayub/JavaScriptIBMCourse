let count = 0;

count = 10;
function increaseCount() {
  //increase the Count
  count++;
  //display count
  displayCount();
  //check the count value
  checkCountValue();
}

//display the count 

function displayCount() {
  document.getElementById("countDisplay").innerHTML = count;
}
//check count value

function checkCountValue() {
  if (count === 10) {
    console.log("Your Instagram post has gained 10 followers!");
  }
  else if (count === 20) {
    console.log("your instagram post has gained 20 followers!");
  }
}
console.log(checkCountValue());