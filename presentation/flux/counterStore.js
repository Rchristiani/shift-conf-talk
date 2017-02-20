//import EventEmitter to handle events
import { EventEmitter } from 'events';

//Create Store bases on EventEmitter
class CounterStore extends EventEmitter {
	constructor() {
		super();
		//Set up initial data
		this.counter = 0;
		//bind actions method
		this.actions = this.actions.bind(this);
	}
	actions(action) {
		//Switch statement for actions
		switch(action.type) {
			case "INCREASE": {
				this.addToCount()
				break;
			}
			case "DECREASE": {
				this.removeFromCount();
				break;
			}
			default: {
				console.log('🔥 whoops not an action I know yet 🔥');
			}
		}
	}
	addToCount() {
		this.counter++;
		this.emit('change');
	}
	removeFromCount() {
		this.counter--;
		this.emit('change');
	}
	getCount() {
		return this.counter;
	}
}


export default new CounterStore;