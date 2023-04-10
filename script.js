// complete the given function

function palindrome(str){
    let str1=str.toLowerCase();
	let n=str1.length;
	if(let i=0;i<n;i++){
		if(str1[i]!==str1[n-i-1]){
			return "false"
		}
	}
	return "true"
}
console.log(palindrome(a))
module.exports = palindrome
