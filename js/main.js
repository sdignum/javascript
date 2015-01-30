function howdy() {
	console.log("Shelley Dignum says hello!")
}

howdy();

var numba = function numba(string) {

if (string.length < 7) {
	console.log("What a short little word!")

} else if (string.length > 7) {
	console.log("I’m sorry, but that’s too many to count.")

} else if (string.length == 7) {
	console.log("7, what a perfect choice!")

}

}

numba(string = "7");

numba(string = "seventy");

numba(string = "university");


function inception( callback, value ) {
	callback(value);
}

function value() {
	console.log("The Book Thief is a fantastic movie");
}

inception(value);