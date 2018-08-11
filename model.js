'use strict';


// Basic Device code begins


function Device (type, name) {
	this._type = type;
	this._name = name;
	this._state = false;
	this._basicFeature;
	this._maxFeatureValue;
	this._userFeatureValue;
};
Device.prototype.on = function () {
	this._state = true;
};
Device.prototype.off = function () {
	this._state = false;
};
Device.prototype.increase = function () {
	if (this._basicFeature < this._maxFeatureValue) {
		this._basicFeature = this._basicFeature + 1;
	}
};
Device.prototype.decrease = function () {
	if (this._basicFeature > this._minFeatureValue) {
		this._basicFeature = this._basicFeature - 1;
	}
};
Device.prototype.setMax = function () {
	this._basicFeature = this._maxFeatureValue;
};
Device.prototype.setMin = function () {
	this._basicFeature = this._minFeatureValue;
};
Device.prototype.setValue = function () {
	if (this._userFeatureValue >= this._minFeatureValue && this._userFeatureValue <= this._maxFeatureValue) {
		this._basicFeature = this._userFeatureValue;
	} else {
		this._basicFeature = this._basicFeature;
	}
};


// Temperature unit code begins


function TemperatureUnit (type, name, device) {
	Device.call(this, type, name);
	this._operation = device;
	this._minTemperature;
	this._maxTemperature;
	this._temperature; 
};
TemperatureUnit.prototype = Object.create(Device.prototype); 
TemperatureUnit.prototype.constructor = TemperatureUnit;
TemperatureUnit.prototype.temperatureIncrease = function () {
	this._operation._basicFeature = this._temperature;
	this._operation._maxFeatureValue = this._maxTemperature;
	this._operation.increase();
	this._temperature = this._operation._basicFeature;
};
TemperatureUnit.prototype.temperatureDecrease = function () {
	this._operation._basicFeature = this._temperature;
	this._operation._maxFeatureValue = this._minTemperature;
	this._operation.decrease();
	this._temperature = this._operation._basicFeature;
};
TemperatureUnit.prototype.temperatureSetMax = function () {
	this._operation._basicFeature = this._temperature;
	this._operation._maxFeatureValue = this._maxTemperature;
	this._operation.setMax();
	this._temperature = this._operation._basicFeature;
};
TemperatureUnit.prototype.temperatureSetMin = function () {
	this._operation._basicFeature = this._temperature;
	this._operation._minFeatureValue = this._minTemperature;
	this._operation.setMin();
	this._temperature = this._operation._basicFeature;
};
TemperatureUnit.prototype.temperatureSetValue = function (temperatureValue) {
	this._operation._basicFeature = this._temperature;
	this._operation._minFeatureValue = this._minTemperature;
	this._operation._maxFeatureValue = this._maxTemperature;
	this._operation._userFeatureValue = Number(temperatureValue);
	this._operation.setValue();
	this._temperature = this._operation._basicFeature;
};


// Fridge code begins


function Fridge (type, name, device) {
	TemperatureUnit.call(this, type, name, device);
	this._minTemperature = -7;
	this._maxTemperature = 7;
	this._temperature = 0;
};
Fridge.prototype = Object.create(TemperatureUnit.prototype); 
Fridge.prototype.constructor = Fridge;


// Heater code begins


function Heater (type, name, device) {
	TemperatureUnit.call(this, type, name, device);
	this._minTemperature = 0;
	this._maxTemperature = 80;
	this._temperature = 40;
	this._heaterPower = 100;
};
Heater.prototype = Object.create(TemperatureUnit.prototype); 
Heater.prototype.constructor = Heater;
Heater.prototype.fullPower = function () {
	this._heaterPower = 100;
};
Heater.prototype.halfPower = function () {
	this._heaterPower = 50;
};


// Lamp code begins


function Lamp (type, name, device) {
	Device.call(this, type, name);
	this._operation = device;
	this._minLight = 0;
	this._maxLight = 100;
	this._light = 50;
};
Lamp.prototype = Object.create(Device.prototype); 
Lamp.prototype.constructor = Lamp;
Lamp.prototype.lightIncrease = function () {
	this._operation._basicFeature = this._light;
	this._operation._maxFeatureValue = this._maxLight;
	this._operation.increase();
	this._light = this._operation._basicFeature;
};
Lamp.prototype.lightDecrease = function () {
	this._operation._basicFeature = this._light;
	this._operation._minFeatureValue = this._minLight;
	this._operation.decrease();
	this._light = this._operation._basicFeature;
};
Lamp.prototype.lightSetMax = function () {
	this._operation._basicFeature = this._light;
	this._operation._maxFeatureValue = this._maxLight;
	this._operation.setMax();
	this._light = this._operation._basicFeature;
};
Lamp.prototype.lightSetMin = function () {
	this._operation._basicFeature = this._light;
	this._operation._minFeatureValue = this._minLight;
	this._operation.setMin();
	this._light = this._operation._basicFeature;
};
Lamp.prototype.lightSetValue = function (lightValue) {
	this._operation._basicFeature = this._light;
	this._operation._minFeatureValue = this._minLight;
	this._operation._maxFeatureValue = this._maxLight;
	this._operation._userFeatureValue = Number(lightValue);
	this._operation.setValue();
	this._light = this._operation._basicFeature;
};


// TV-set code begins


function TvDevice (type, name, device) {
	Device.call(this, type, name);
	this._operation = device;
	this._volume = 25;
	this._minVolume = 0;
	this._maxVolume = 100;
	this._channel = 1;
	this._minChannel = 1;
	this._maxChannel = 99;
};
TvDevice.prototype = Object.create(Device.prototype); 
TvDevice.prototype.constructor = TvDevice;
TvDevice.prototype.volumeIncrease = function () {
	this._operation._basicFeature = this._volume;
	this._operation._maxFeatureValue = this._maxVolume;
	this._operation.increase();
	this._volume = this._operation._basicFeature;
};
TvDevice.prototype.volumeDecrease = function () {
	this._operation._basicFeature = this._volume;
	this._operation._minFeatureValue = this._minVolume;
	this._operation.decrease();
	this._volume = this._operation._basicFeature;
};
TvDevice.prototype.volumeSetMax = function () {
	this._operation._basicFeature = this._volume;
	this._operation._maxFeatureValue = this._maxVolume;
	this._operation.setMax();
	this._volume = this._operation._basicFeature;
};
TvDevice.prototype.volumeSetMin = function () {
	this._operation._basicFeature = this._volume;
	this._operation._minFeatureValue = this._minVolume;
	this._operation.setMin();
	this._volume = this._operation._basicFeature;
};
TvDevice.prototype.volumeSetValue = function (volumeValue) {
	this._operation._basicFeature = this._volume;
	this._operation._minFeatureValue = this._minVolume;
	this._operation._maxFeatureValue = this._maxVolume;
	this._operation._userFeatureValue = Number(volumeValue);
	this._operation.setValue();
	this._volume = this._operation._basicFeature;
};
TvDevice.prototype.nextChannel = function () {
	this._operation._basicFeature = this._channel;
	this._operation._maxFeatureValue = this._maxChannel;
	this._operation.increase();
	this._channel = this._operation._basicFeature;
};
TvDevice.prototype.prevChannel = function () {
	this._operation._basicFeature = this._channel;
	this._operation._minFeatureValue = this._minChannel;
	this._operation.decrease();
	this._channel = this._operation._basicFeature;
};
TvDevice.prototype.lastChannel = function () {
	this._operation._basicFeature = this._channel;
	this._operation._maxFeatureValue = this._maxChannel;
	this._operation.setMax();
	this._channel = this._operation._basicFeature;
};
TvDevice.prototype.firstChannel = function () {
	this._operation._basicFeature = this._channel;
	this._operation._minFeatureValue = this._minChannel;
	this._operation.setMin();
	this._channel = this._operation._basicFeature;
};
TvDevice.prototype.setChannel = function (channel) {
	this._operation._basicFeature = this._channel;
	this._operation._minFeatureValue = this._minChannel;
	this._operation._maxFeatureValue = this._maxChannel;
	this._operation._userFeatureValue = Number(channel);
	this._operation.setValue();
	this._channel = this._operation._basicFeature;
};
