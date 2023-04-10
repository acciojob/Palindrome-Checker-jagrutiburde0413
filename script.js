// complete the given function

function palindrome(str){
    let flag=0;
	let str=str.toLowerCase()
	for(let i=0;i<=str.length/2 && str.length!=0;i++){
		if(str[i]!=str[str.length-i-1]){
			flag=1;
			break;
		}
	}
	if(flag==1){
		return "NO"
	}else{
		return "YES"
	}
}

}

module.exports = palindrome
