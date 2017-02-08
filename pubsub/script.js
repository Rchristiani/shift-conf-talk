const app = {};

app.events = function() {
	const add = document.getElementById('add');
	const subtract = document.getElementById('subtract');
	
	add.addEventListener('click', () => {
		//publish an increase event when add is clicked
		pubsub.publish('increase', 1);
	});
	
	subtract.addEventListener('click',() => {
		//publish a decrease event when subtract is clicked
		pubsub.publish('decrease', 1);
	});
};

app.counter = function() {
	let counter = 0;
	const counterElm = document.querySelector('.counter');
	//Subscribe on the increase event
	pubsub.subscribe('increase',(data) => {
		counter++;
		counterElm.innerHTML = counter;
	});
	//Subscribe on the decrease event
	pubsub.subscribe('decrease', (data) => {
		counter--;
		counterElm.innerHTML = counter;
	});
};

app.clickCounter = function() {
	//Just another counter to demonstrate how you can
	//subscribe multiple things to the same event being 
	//published
	let count = 0;
	function addToCounter() {
		count++;
		document.querySelector('.click-count span').innerHTML = count;
	}
	pubsub.subscribe('increase', addToCounter);
	pubsub.subscribe('decrease', addToCounter);
};

app.init = function() {
	//Set up event to subscribe too
	app.events();
	//Counter View
	app.counter();
	//Click Counter
	app.clickCounter();
};

window.onload = app.init;