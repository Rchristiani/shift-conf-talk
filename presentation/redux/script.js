import { createStore } from 'redux';
import counterReducer from './counterReducer.js';

const app = {};

app.store = createStore(counterReducer,0,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

app.events = function() {
	const add = document.getElementById('add');
	const subtract = document.getElementById('subtract');
	
	add.addEventListener('click', () => {
		app.store.dispatch({
			type: "INCREMENT",
			data: 1
		});
	});
	
	subtract.addEventListener('click',() => {
		app.store.dispatch({
			type: "DECREMENT",
			data: 1
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
	app.store.subscribe(addToCounter);

};

app.init = function() {
	//Set up event to subscribe too
	app.events();
	//Click Counter
	app.clickCounter();
	//
	app.store.subscribe(() => {
		console.log(app.store.getState());
		document.querySelector('.counter').innerHTML = app.store.getState();
	});
};

window.onload = app.init;