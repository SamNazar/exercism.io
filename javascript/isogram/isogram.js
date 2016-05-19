function Isogram(inWord) {
	
	
	
	this.isIsogram = function() {
		var result = true;
		var spaces =/\s/g;
		inWord = inWord.replace(spaces, "").toLowerCase().split('');
		var letterList = {};
		for (var i = 0; i < inWord.length; i++){
			if (letterList[inWord[i]]){
				return false;
			}
			else{
				letterList[inWord[i]] = 1;
			}
		}
		return result;
	}
}

module.exports = Isogram;