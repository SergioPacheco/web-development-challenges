// Add the code you want to test below:
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function () {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function () {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

//  change text it using any of these methods,
/*
document.querySelector('view-button').innerHTML = 'Hello, World!';
document.querySelector('view-button').innerText = 'Hello, World!';
document.querySelector('view-button').textContent = 'Hello, World!';
*/
let textChange = function () {
  view.textContent = 'Hello, World!';
};
let textReturn = function () {
  view.textContent = 'View';
};
view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);
