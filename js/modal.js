// Modal
var modal_box = document.getElementsByClassName("modal")[0];
var modal_open = document.getElementsByClassName("modal-open")[0];
console.log(modal_open);

modal_open.onclick = function() {
	modal_box.classList.toggle('open');
}