'use strict';

function SmartHouse (deviceArray) {

	this._deviceArray = deviceArray;
	this._createButton = document.getElementById("create");
	this._lampColumn = document.getElementById("lamp");
	this._heaterColumn = document.getElementById("heater");
	this._frigerColumn = document.getElementById("friger");
	this._tvColumn = document.getElementById("tv");
	this._newDevice = new CreateNewDevice(this._deviceArray);

};

SmartHouse.prototype.addNewDevice = function () {
	var self = this;
	this._createButton.onclick = function () {
		var deviceName = document.getElementById("device-sel-name").value;
		var deviceType = document.getElementById("device-sel-type").value;
		if (deviceName.length > 0) {
			var device = new Device();
			self._newDevice.addNewDevice(deviceType, deviceName, device);
			init.renderDevice();
		}
	}	
};

SmartHouse.prototype.renderDevice = function () {
	this._lampColumn.innerHTML = null;
	this._heaterColumn.innerHTML = null;
	this._frigerColumn.innerHTML = null;
	this._tvColumn.innerHTML = null;
	for (var i = 0; i < this._deviceArray.length; i++) {
		for (var j = 0; j < this._deviceArray[i].length; j++) {
			switch (i) {
		        case 0:
		        	this._lampColumn.appendChild(renderLamp(this._deviceArray, i, j));
		            break;
		        case 1:
		            this._heaterColumn.appendChild(renderHeater(this._deviceArray, i, j));
		            break;
				case 2:
		            this._frigerColumn.appendChild(renderFridge(this._deviceArray, i, j));
		            break;          
				case 3:
		            this._tvColumn.appendChild(renderTv(this._deviceArray, i, j));
		            break;
		    }
		}
	}
};

SmartHouse.prototype.manageEvents = function () {
	var self = this;
	var wrapper = document.getElementById("column-wrapper");
	wrapper.onclick = function (event) {
		var evnt = event || window.event;
		var i = evnt.target.closest('.control').getAttribute('data-type');
		var j = evnt.target.closest('.control').getAttribute('data-index');
		switch(evnt.target.className) {
	        
			// On-off controllers

	        case 'on-btn':
	        	self._deviceArray[i][j].on();
				init.renderDevice();
				break;
			case 'off-btn':
	        	self._deviceArray[i][j].off();
				init.renderDevice();
				break;

			// Lamp controllers

			case 'min-light-btn':
	        	self._deviceArray[i][j].lightSetMin();
				init.renderDevice();
				break;				
			case 'decrease-light-btn':
	        	if (self._deviceArray[i][j]._light > self._deviceArray[i][j]._minLight) {
	        		self._deviceArray[i][j].lightDecrease();
	        	} 
				init.renderDevice();
				break;
			case 'increase-light-btn':
	        	if (self._deviceArray[i][j]._light < self._deviceArray[i][j]._maxLight) {
	        		self._deviceArray[i][j].lightIncrease();
	        	} 
				init.renderDevice();
				break;				
			case 'max-light-btn':
	        	self._deviceArray[i][j].lightSetMax();
				init.renderDevice();
				break;
			case 'set-light-btn':
				var light = document.getElementsByName('brightness' + j)[0].value;
				self._deviceArray[i][j].lightSetValue(light);
				init.renderDevice();
				break;								
			
			// Fridge and heater controllers

			case 'min-tempr-btn':
				self._deviceArray[i][j].temperatureSetMin();
		        init.renderDevice();
				break;				
			case 'decrease-tempr-btn':
				if (self._deviceArray[i][j]._temperature > self._deviceArray[i][j]._minTemperature) {
		       		self._deviceArray[i][j].temperatureDecrease();	        		
	        	} 
		    	init.renderDevice();
				break;
			case 'increase-tempr-btn':
				if (self._deviceArray[i][j]._temperature < self._deviceArray[i][j]._maxTemperature) {
		       		self._deviceArray[i][j].temperatureIncrease();	        		
	        	} 
		    	init.renderDevice();
				break;
			case 'max-tempr-btn':
	        	self._deviceArray[i][j].temperatureSetMax();
		        init.renderDevice();
				break;	
			case 'set-tempr-btn':
				if (i == 1) {
		        	var heaterTempr = document.getElementsByName('heaterTemperature' + j)[0].value;
					self._deviceArray[i][j].temperatureSetValue(heaterTempr);
				} else {
		        	if (i == 2) {
		        		var fridgeTempr = document.getElementsByName('fridgeTemperature' + j)[0].value;
						self._deviceArray[i][j].temperatureSetValue(fridgeTempr);
		        	}
		        }	        	
				init.renderDevice();
				break;	
			case 'half-power':
				self._deviceArray[i][j].halfPower();
				init.renderDevice();
				break;
			case 'full-power':
				self._deviceArray[i][j].fullPower();
				init.renderDevice();
				break;

			// Tv controllers, channels

			case 'min-channel-btn':
	        	self._deviceArray[i][j].firstChannel();
				init.renderDevice();
				break;				
			case 'decrease-channel-btn':
	        	if (self._deviceArray[i][j]._channel > self._deviceArray[i][j]._minChannel) {
	        		self._deviceArray[i][j].prevChannel();
	        	} 
				init.renderDevice();
				break;
			case 'increase-channel-btn':
	        	if (self._deviceArray[i][j]._channel < self._deviceArray[i][j]._maxChannel) {
	        		self._deviceArray[i][j].nextChannel();
	        	} 
				init.renderDevice();
				break;				
			case 'max-channel-btn':
	        	self._deviceArray[i][j].lastChannel();
				init.renderDevice();
				break;
			case 'set-channel-btn':
				var channel = document.getElementsByName('channel' + j)[0].value;
				self._deviceArray[i][j].setChannel(channel);
				init.renderDevice();
				break;					

			// Tv controllers, volume

			case 'min-volume-btn':
	        	self._deviceArray[i][j].volumeSetMin();
				init.renderDevice();
				break;				
			case 'decrease-volume-btn':
	        	if (self._deviceArray[i][j]._volume > self._deviceArray[i][j]._minVolume) {
	        		self._deviceArray[i][j].volumeDecrease();
	        	} 
				init.renderDevice();
				break;
			case 'increase-volume-btn':
	        	if (self._deviceArray[i][j]._volume < self._deviceArray[i][j]._maxVolume) {
	        		self._deviceArray[i][j].volumeIncrease();
	        	} 
				init.renderDevice();
				break;				
			case 'max-volume-btn':
	           	self._deviceArray[i][j].volumeSetMax();
				init.renderDevice();
				break;
			case 'set-volume-btn':
				var volume = document.getElementsByName('volume' + j)[0].value;
				self._deviceArray[i][j].volumeSetValue(volume);
				init.renderDevice();
				break;					

			// Remove device

			case 'remove-device':
	        	self._newDevice.removeDevice(i, j);
				init.renderDevice();
				break;		
		}
	}
}