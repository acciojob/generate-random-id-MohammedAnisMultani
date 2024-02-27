function makeid(l) { 

	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = ''
	let charctersLength = characters.length
	for(let i=0; i<l; i++){
 result += characters.charAt(Math.floor(Math.random()*charctersLength))
	}
	return result    
	

// Do not change the code below.
const l = prompt("Enter a number."); 
alert(makeid(l));
