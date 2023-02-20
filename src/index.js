module.exports = function reverse(n) {
	let reverse = parseInt(Math.abs(n).toString().split('').reverse().join(''))
	return reverse

}
console.log(module.exports(17))