//your JS code here. If required.
async function fetchingApi(){
	try{
		const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		const data = await res.json();
		console.log(data);
	}
	catch(e){
		console.log(e)
	}
}

fetchingApi();