import ObjectBase from 'flux/core/ObjectBase.js';
import StoreRegistry from 'flux/core/StoreRegistry.js';

export default class StoreBase extends ObjectBase {

	constructor(props) {
		super(props);
		this._content = props.content || {};
		this._callbacks = {callbacks: []};
		StoreRegistry.registerStore(this);
	}

	getContent() {
		return this._content;
	}

	setContent(content) {
		this._content = content;
	}

	notify() {
		let length = this._callbacks.callbacks.length;
		for (let i = 0 ; i < length ; i++) {
			let current = this._callbacks.callbacks[i];
			current.callback();
		}
	}
	
	notifyPath(path) {
		this.notify();
		path = path.split("/");
		var temp = this._callbacks;
		for (var i = 0; i < path.length; i++) {
			temp = temp[path[i]];
			if (temp) {
				if (temp.callbacks)
					for (let j = 0 ; j < temp.callbacks.length ; j++) {
						let current = temp.callbacks[j];
						current.callback();
					}
			}
			else {
				break;
			}
			
		}
	}
	
	register(path, controller, callback) {
		if (path.length == 0) {
			this._callbacks.callbacks.push({
				controller: controller,
				callback: callback
			})
		}
		else {
			var temp = this._callbacks;
			for (var i = 0; i < path.length; i++) {
				temp[path[i]] = temp[path[i]] || {};
				temp = temp[path[i]];
			}
			temp["callbacks"] = temp["callbacks"] || [];
			temp["callbacks"].push({
				controller: controller,
				callback: callback
			})
		}
	}
	
	
	deleteCallBacks(callBacks, controller){
		let length = callBacks.length;
		for (let i = 0 ; i < length ; i++) {
			let current = callBacks[i];
			if (current.controller === controller) {
				callBacks.splice(i, 1);
				i--;
				length--;
			}
		}
	}
	
	unregisterRecurse(node, controller){
		for (var prop in node) {
			if (prop == "callbacks") {
				this.deleteCallBacks(node[prop], controller);
			}
			else {
				this.unregisterRecurse(node[prop], controller);
			}
		}
	}
	
	unregister(controller) {
		this.unregisterRecurse(this._callbacks, controller);
	}

	getData(path) {
		if (path) {
			let spath = path.split('/');
			let current = this._content;
			for (let i = 0 ; i < spath.length ; i++) {
				if (spath[i] !== '') {
					current = current[spath[i]]
					if (!current) {
						return undefined;
					}
				}
			}
			return current;
		} else {
			return this._content;
		}
	}
}
