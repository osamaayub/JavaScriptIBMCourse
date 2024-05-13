let length;
let width;

function calculateArea() {
  length = parseFloat(document.getElementById('length').value);
  width = parseFloat(document.getElementById('width').value);
  let area = lenght * width;
  document.getElementById('result').innerHTML = `The area of rectangle is:${area}`;
}
