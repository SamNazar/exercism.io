"use strict";

var Triplet = function(a, b, c) { 
	this.a = a, this.b = b, this.c = c;
}
	
Triplet.prototype.sum = function() {
	return this.a + this.b + this.c;
}
	
Triplet.prototype.product = function () {
	return this.a * this.b * this.c;
}
	
Triplet.prototype.isPythagorean = function () {
	return (Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2));
}

Triplet.where = function (factorInfo) {
	var maxFactor = factorInfo.maxFactor;
	var minFactor = factorInfo.minFactor;
	var sumFilter = factorInfo.sum;
	var foundTriplets = [];
	var a, b, c;
	var testingTriplet;
	for (a = minFactor || 3; a <= (maxFactor - 2); a++) 
	{
		for (b = a+1; b <= (maxFactor - 1); b++){
			for (c = b+1; c <= (maxFactor); c++){
				testingTriplet = new Triplet(a, b, c);
				if (sumFilter && (testingTriplet.sum() != sumFilter)) {
					continue;
				}
				if (testingTriplet.isPythagorean()) {
					foundTriplets.push(testingTriplet);
				}
			}
		}
	}
	return foundTriplets;
}

module.exports = Triplet;