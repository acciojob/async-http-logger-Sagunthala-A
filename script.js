//your JS code here. If required.
async function fetchingApi(){
	try{
		const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		console.log(res.body);
	}
	catch(e){
		console.log(e)
	}
}

fetchingApi();