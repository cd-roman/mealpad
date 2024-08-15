import icons from "url:../../img/icons.svg";

class Copyright {
  _parentElement = document.querySelector(".copyright");

  updateYear(year) {
    const markup = this._generateMarkup(year);
    this._parentElement.textContent = markup;
  }

  _generateMarkup(year) {
    return `© Mealpad app, ${year}`;
  }
}

export default new Copyright();
