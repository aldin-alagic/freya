class Vehicle {
  constructor(brand, model, year, fuelType, transmission) {
    this._brand = brand;
    this._model = model;
    this._year = year;
    this._fuelType = fuelType;
    this._transmission = transmission;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    this._year = newYear;
  }
  get fuelType() {
    return this._fuelType;
  }

  set fuelType(newFuelType) {
    this._fuelType = newFuelType;
  }
  get transmission() {
    return this._transmission;
  }

  set transmission(newTransmission) {
    this._transmission = newTransmission;
  }
}

export default Vehicle;
