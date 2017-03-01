import StoreBase from 'flux/core/StoreBase.js';
import Dispatcher from 'flux/core/Dispatcher';
import StoreRegistry from 'flux/core/StoreRegistry';

var DEFAULT_CONTENT = { 
};

var SudokuStore = new StoreBase ({ 
	name: 'APP_STORE',
	content: DEFAULT_CONTENT
});

// GET IMAGE
SudokuStore.onGetImage = function (result, param) {
	var source = 'data:' + result.type + ';base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(result.content)));
	let img = new Image();
	img.onload = function () {
		SudokuStore._content.images[param.image] = img;
		SudokuStore.notify();
	}
	img.src = source;
	
};
Dispatcher.register('GET_IMAGE', SudokuStore.onGetImage);

export default SudokuStore;