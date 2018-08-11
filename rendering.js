'use strict';

function renderLamp (deviceArray, i, j) {
	if (deviceArray[i][j]._state == false) {
		var spanClass = 'deviceOff';
	} else {
		var spanClass = 'deviceOn';
	}
	var div = document.createElement('div');
  	div.className = 'device-lamp device';
	div.innerHTML = '<div class="info">'+
						'<p>Наименование: <span>' + deviceArray[i][j]._name + '</p>'+
						'<p>Состояние: <span class="' + spanClass + '"></span></p>'+
						'<p>Яркость: <span>' + deviceArray[i][j]._light + '</span></p>'+
					'</div>'+
					'<div class="control" data-type="' + i + '" data-index="' + j + '">'+
						'<h3>Управление</h3>'+
						'<form>'+
							'<fieldset class="supply">'+
								'<legend>Питание</legend>'+
								'<button type="button" class="on-btn">Вкл.</button>'+
								'<button type="button" class="off-btn">Выкл.</button>'+
							'</fieldset>'+
							'<fieldset class="lamp-brightness">'+
								'<legend>Яркость</legend>'+
								'<button type="button" class="min-light-btn">Мин.</button>'+
								'<button type="button" class="decrease-light-btn">-</button>'+
								'<button type="button" class="increase-light-btn">+</button>'+
								'<button type="button" class="max-light-btn">Макс.</button>'+
								'<input type="number" name="brightness' + j + '">'+
								'<button type="button" class="set-light-btn">Задать</button>'+
							'</fieldset>'+
							'<button type="button" class="remove-device" data-size="btn-big">Удалить устройство</button>'+
						'</form>'+
					'</div>';
	return div;
}

function renderHeater (deviceArray, i, j) {
	if (deviceArray[i][j]._state == false) {
		var spanClass = 'deviceOff';
	} else {
		var spanClass = 'deviceOn';
	}
	var div = document.createElement('div');
  	div.className = 'device-heater device';
	div.innerHTML = '<div class="info">'+
						'<p>Наименование: <span>' + deviceArray[i][j]._name + '</span></p>'+
						'<p>Состояние: <span class="' + spanClass + '"></span></p>'+
						'<p>Температура: <span>' + deviceArray[i][j]._temperature + '</span></p>'+
						'<p>Мощность: <span>' + deviceArray[i][j]._heaterPower + '</span>%</p>'+
					'</div>'+
					'<div class="control" data-type="' + i + '" data-index="' + j + '">'+
						'<h3>Управление</h3>'+
						'<form>'+
							'<fieldset class="supply">'+
								'<legend>Питание</legend>'+
								'<button type="button" class="on-btn">Вкл.</button>'+
								'<button type="button" class="off-btn">Выкл.</button>'+
							'</fieldset>'+
							'<fieldset class="heater-tempr">'+
								'<legend>Температура</legend>'+
								'<button type="button" class="min-tempr-btn">Мин.</button>'+
								'<button type="button" class="decrease-tempr-btn">-</button>'+
								'<button type="button" class="increase-tempr-btn">+</button>'+
								'<button type="button" class="max-tempr-btn">Макс.</button>'+
								'<input type="number" name="heaterTemperature' + j + '">'+
								'<button type="button" class="set-tempr-btn">Задать</button>'+
							'</fieldset>'+
							'<fieldset class="supply">'+
								'<legend>Мощность</legend>'+
								'<button type="button" class="half-power">50%</button>'+
								'<button type="button" class="full-power">100%</button>'+
							'</fieldset>'+
							'<button type="button" class="remove-device" data-size="btn-big">Удалить устройство</button>'+
						'</form>'+
					'</div>';
	return div;

}

function renderFridge (deviceArray, i, j) {
	if (deviceArray[i][j]._state == false) {
		var spanClass = 'deviceOff';
	} else {
		var spanClass = 'deviceOn';
	}
	var div = document.createElement('div');
  	div.className = 'device-friger device';
	div.innerHTML = '<div class="info">'+
						'<p>Наименование: <span>' + deviceArray[i][j]._name + '</p>'+
						'<p>Состояние: <span class="' + spanClass + '"></span></p>'+
						'<p>Температура: <span>' + deviceArray[i][j]._temperature + '</span></p>'+
					'</div>'+
					'<div class="control" data-type="' + i + '" data-index="' + j + '">'+
						'<h3>Управление</h3>'+
						'<form>'+
							'<fieldset class="supply">'+
								'<legend>Питание</legend>'+
								'<button type="button" class="on-btn">Вкл.</button>'+
								'<button type="button" class="off-btn">Выкл.</button>'+
							'</fieldset>'+
							'<fieldset class="heater-tempr">'+
								'<legend>Температура</legend>'+
								'<button type="button" class="min-tempr-btn">Мин.</button>'+
								'<button type="button" class="decrease-tempr-btn">-</button>'+
								'<button type="button" class="increase-tempr-btn">+</button>'+
								'<button type="button" class="max-tempr-btn">Макс.</button>'+
								'<input type="number" name="fridgeTemperature' + j + '">'+
								'<button type="button" class="set-tempr-btn">Задать</button>'+
							'</fieldset>'+
							'<button type="button" class="remove-device" data-size="btn-big">Удалить устройство</button>'+
						'</form>'+
					'</div>';
	return div;
}

function renderTv (deviceArray, i, j) {
	if (deviceArray[i][j]._state == false) {
		var spanClass = 'deviceOff';
	} else {
		var spanClass = 'deviceOn';
	}
	var div = document.createElement('div');
  	div.className = 'device-tv device';
	div.innerHTML = '<div class="info">'+
						'<p>Наименование: <span>' + deviceArray[i][j]._name + '</p>'+
						'<p>Состояние: <span class="' + spanClass + '"></span></p>'+
						'<p>Канал: <span>' + deviceArray[i][j]._channel + '</span></p>'+
						'<p>Громкость: <span>' + deviceArray[i][j]._volume + '</span></p>'+
					'</div>'+
					'<div class="control" data-type="' + i + '" data-index="' + j + '">'+
						'<h3>Управление</h3>'+
						'<form>'+
							'<fieldset class="supply">'+
								'<legend>Питание</legend>'+
								'<button type="button" class="on-btn">Вкл.</button>'+
								'<button type="button" class="off-btn">Выкл.</button>'+
							'</fieldset>'+
							'<fieldset class="channel">'+
								'<legend>Канал</legend>	'+
								'<button type="button" class="min-channel-btn">В начало</button>'+
								'<button type="button" class="decrease-channel-btn">&#60;</button>'+
								'<button type="button" class="increase-channel-btn">&#62;</button>'+
								'<button type="button" class="max-channel-btn">В конец</button>'+
								'<input type="number" name="channel' + j + '">'+
								'<button type="button" class="set-channel-btn">Задать</button>'+
							'</fieldset>'+
							'<fieldset class="volume">'+
								'<legend>Громкость</legend>'+
								'<button type="button" class="min-volume-btn">Мин.</button>'+
								'<button type="button" class="decrease-volume-btn">-</button>'+
								'<button type="button" class="increase-volume-btn">+</button>'+
								'<button type="button" class="max-volume-btn">Макс.</button>'+
								'<input type="number" name="volume' + j + '">'+
								'<button type="button" class="set-volume-btn">Задать</button>'+
							'</fieldset>'+
							'<button type="button" class="remove-device" data-size="btn-big">Удалить устройство</button>'+
						'</form>'+
					'</div>';
	return div;
}