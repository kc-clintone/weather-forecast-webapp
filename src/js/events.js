/* eslint-disable no-alert */
/* eslint-disable no-console */
import uiHandler from './dom';
// handle events
const events = function events() {
	function showFlow(data) {
		uiHandler().clearForms();
		uiHandler().fillCard(data);
		uiHandler().imageSwitch(data, 'image');
		uiHandler().show('search');

		const farCel = document.getElementById('farCel');
		farCel.onclick = function changeTemp() {
			uiHandler().converter(data);
		};
	}
	// handle data
	function forecastFlow(data) {
		uiHandler().clearForms();
		uiHandler().createCard(data);
		uiHandler().show('forecast');
	}
	// handle search
	async function getSearch(city) {
		try {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=903507f17d707fecd352d38301efba77&units=metric`;
			const response = await fetch(url, { mode: 'cors' });
			const cityData = await response.json();
			showFlow(cityData);
		} catch (error) {
			console.error('Error:', error);
			alert('Could not find the location');
		}
	}
	// get location data
	function getLocation(searchBar) {
		const city = document.getElementById(searchBar).value.toLowerCase();
		getSearch(city);
	}
	// get forecast data
	async function getForecast() {
		try {
			const value = document.getElementById('search').value.toLowerCase();
			const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=903507f17d707fecd352d38301efba77`;
			const response = await fetch(url, { mode: 'cors' });
			const cityData = await response.json();
			forecastFlow(cityData);
		} catch (error) {
			console.error('Error:', error);
			alert('Could not find the location');
		}
	}

	return {
		getSearch,
		showFlow,
		getForecast,
		getLocation,
	};
};

export { events as default };
