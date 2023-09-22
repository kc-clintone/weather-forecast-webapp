/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-console */

const helpers = function helpers() {
  const createElement = function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  };

  const createElementWithInnerText = function createElementWithInnerText(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = text;
    return element;
  };

  const addInnerText = function addInnerText(className, text) {
    const element = document.getElementById(className);
    element.innerHTML = text;
    return element.innerHTML;
  };

  // js async func
  async function getFahrenheit(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=903507f17d707fecd352d38301efba77&units=imperial`;
      const response = await fetch(url, { mode: 'cors' });
      const cityFahr = await response.json();
      return cityFahr;
    } catch (error) {
      console.error('Error:', error);
      alert('Please check if you typed the correct city or check your network');
    }
  }

  return {
    addInnerText, createElement, createElementWithInnerText, getFahrenheit,
  };
};


export { helpers as default };