class Solution {
  constructor(
    title,
    shortDescription,
    description,
    sideEffects,
    standardPrice,
    premiumPrice,
    likes,
    dislikes,
    sales,
    views
  ) {
    this._title = title;
    this._shortDescription = shortDescription;
    this._description = description;
    this._sideEffects = sideEffects;
    this._standardPrice = standardPrice;
    this._premiumPrice = premiumPrice;
    this._likes = likes;
    this._dislikes = dislikes;
    this._sales = sales;
    this._views = views;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get shortDescription() {
    return this._shortDescription;
  }

  set shortDescription(newShortDescription) {
    this._shortDescription = newShortDescription;
  }

  get description() {
    return this._description;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  get sideEffects() {
    return this._sideEffects;
  }

  set sideEffects(newsSideEffects) {
    this._sideEffects = newsSideEffects;
  }

  get standardPrice() {
    return this._standardPrice;
  }

  set standardPrice(newStandardPrice) {
    this._standardPrice = newStandardPrice;
  }

  get premiumPrice() {
    return this._premiumPrice;
  }

  set premiumPrice(newPremiumPrice) {
    this._premiumPrice = newPremiumPrice;
  }

  get likes() {
    return this._likes;
  }

  set likes(newLikes) {
    this._likes = newLikes;
  }

  get dislikes() {
    return this._dislikes;
  }

  set dislikes(newDislikes) {
    this._dislikes = newDislikes;
  }

  get sales() {
    return this._sales;
  }

  set sales(newSales) {
    this._sales = newSales;
  }

  get views() {
    return this._views;
  }

  set views(newViews) {
    this._views = newViews;
  }
}
export default Solution;
