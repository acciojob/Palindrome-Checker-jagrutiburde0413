// complete the given function

function palindrome(str){
    let str=str.toLowerCase();
	let n=str.length;
	if(let i=0;i<n;i++){
		if(str[i]!==str[n-i-1]){
			return "false"
		}
	}
	return "true"
}
module.exports = palindrome
