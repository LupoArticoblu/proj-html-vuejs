let counter = 0;

document.getElementById("js-ex").addEventListener("click", myFunction);

function myFunction() {
  counter++;
  document.getElementById("number_of_items").innerHTML = counter;
  console.log('ciao');
}