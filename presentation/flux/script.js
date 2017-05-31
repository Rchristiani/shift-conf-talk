//Pull in Dispatcher, similar to the pubsub object
//this is used to register and publish(dispatch) data
import { Dispatcher } from 'flux';
//Pull in our store, in this case a simple class that stores our data
import CounterStore from './counterStore.js';
const app = {};
//Create the dispatcher
const dispatcher = new Dispatcher;

app.events = function() {
	const add = document.getElementById('add');
	const subtract = document.getElementById('subtract');
	
	add.addEventListener('click', () => {
		//Dispatch an action, could be an action created
		//but just a simple object right now
		dispatcher.dispatch({
			type: 'INCREASE'
		});
	});
	
	subtract.addEventListener('click',() => {
		//Dispatch an action, could be an action created
		//but just a simple object right now
		dispatcher.dispatch({
			type: 'DECREASE'
		});
	});
};

app.clickCounter = function() {
	//Just another counter to demonstrate how you can
	//listen for more than one action
	let count = 0;
	function addToCounter() {
		count++;
		document.querySelector('.click-count span').innerHTML = count;
	}
	//When the change event is emitted from the store
	//Update the count
	CounterStore.on('change',addToCounter);

};

app.init = function() {
	//Set up event to subscribe too
	app.events();
	//Click Counter
	app.clickCounter();
	//Register out Stores action handler to be called when
	//actions are dispatched
	dispatcher.register(CounterStore.actions);
	//This is used to update the count
	CounterStore.on('change', () => {
		document.querySelector('.counter').innerHTML = CounterStore.getCount();
	});
};

window.onload = app.init;