// complete the given function

function palindrome(str){
    let flag=false;
	str=str.toLowerCase()
	for(let i=0;i<Math/floor(str.length/2);i++){
		if(str[i]!==str[str.length-i-1]){
			flag=true;
			break;
		}
	}
	if(flag==true){
		return "false"
	}else{
		return "true"
	}
}
module.exports = palindrome
