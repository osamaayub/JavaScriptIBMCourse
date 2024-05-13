let length;
let width;

function calculateArea() {
  length = parseFloat(document.getElementById('length').value);
  width = parseFloat(document.getElementById('width').value);
  let area = lenght * width;
  document.getElementById('result').innerHTML = `The area of rectangle is:${area}`;
}
function groceryTracker(amount) {
  let grocery1 = parseFloat(document.getElementById('grocery1').value);
  let grocery2 = parseFloat(document.getElementById('grocery2').value);
  let grocery3 = parseFloat(document.getElementById('grocery3').value);
  let totalAmount = grocery1 + grocery2 + grocery3;

  document.getElementById('result').innerHTML = `The total Amount is:${totalAmount}`;


}