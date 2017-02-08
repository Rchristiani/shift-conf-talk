((global) => {
	const pubsub = {
		listeners: {},
		publish(eventName, data) {
			//Publish method, used to take event name and data
			//If event does not exists or no listeners, do nothing
			if(!this.listeners[eventName] || this.listeners[eventName].length === 0) return
			
			//Else iterate through and call the registered callbacks with data
			this.listeners[eventName].forEach((fn) => {
				fn(data);
			});

		},
		subscribe(eventName, fn) {
			//Subscribe method, used to subscribe to an event
			//Also used to register the callback function
			//If even it does not exists yet, create an empty array there.
			if(!this.listeners[eventName]) {
				this.listeners[eventName] = [];
			}
			//Grab the index after the push to said event
			let index = this.listeners[eventName].push(fn) - 1;
			//return an object with a remove method
			return {
				remove: ()=> {
					//If the remove method is called splice out the registered callback
					//index persists via closure 
					this.listeners[eventName].splice(index,1);
				}
			}

		}
	};
	global.pubsub = pubsub;
})(window)