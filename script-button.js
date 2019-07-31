var left =  document.getElementById('arrow-prev');
var rigth = document.getElementById('arrow-next');
var step = 274;
var position = 0;
var carousel = document.getElementById('.experts');
var list = document.querySelector('.lectors');
var count = 0; // количество лекторов


left.onclick = function () {
	if (position < 0) {
		position = position + step;
		console.log(position);
		list.style.left = position + 'px';
	}
}

rigth.onclick = function() {
	count += 1;
	if (position <= 0 && position > -400) {
		
		position = position - step;
		console.log(position);
		list.style.left = position + 'px';
	}}

	// document.getEl