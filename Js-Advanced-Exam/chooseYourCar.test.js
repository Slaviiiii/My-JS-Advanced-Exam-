const { expect } = require('chai');
const { chooseYourCar } = require('./chooseYourCar');

describe('Test chooseYourCar', () => {
  describe('test choosingType', () => {
    it('should throw an Error for invalid year', () => {
      expect(() => chooseYourCar.choosingType('string', 'string', 1800)).to.throw('Invalid Year!');
      expect(() => chooseYourCar.choosingType('string', 'string', 2023)).to.throw('Invalid Year!');
    });

    it('should throw an Error for invalid type', () => {
      expect(() => chooseYourCar.choosingType([], 'string', 2020)).to.throw(`This type of car is not what you are looking for.`);
      expect(() => chooseYourCar.choosingType(1, 'string', 2020)).to.throw(`This type of car is not what you are looking for.`);
    });

    it('met requierments', () => {
      expect(chooseYourCar.choosingType('Sedan', 'string', 2012)).to.equal(`This string Sedan meets the requirements, that you have.`);
      expect(chooseYourCar.choosingType('Sedan', 'string', 2010)).to.equal(`This string Sedan meets the requirements, that you have.`);
      expect(chooseYourCar.choosingType('Sedan', 'string', 2022)).to.equal(`This string Sedan meets the requirements, that you have.`);
    });

    it('not met requierments', () => {
      expect(chooseYourCar.choosingType('Sedan', 'string', 2000)).to.equal(`This Sedan is too old for you, especially with that string color.`);
      expect(chooseYourCar.choosingType('Sedan', 'string', 2002)).to.equal(`This Sedan is too old for you, especially with that string color.`);
    });
  });

  describe('test brandName', () => {
    it('should throw an Error for invalid input', () => {
      expect(() => chooseYourCar.brandName('', 1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName(1, '')).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName('', '')).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 4)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2.1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -2)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName([], 3)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], '')).to.throw("Invalid Information!");
    });

    it('happy path', () => {
      expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal("BMW, Peugeot");
      expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal("Toyota, Peugeot");
      expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).to.equal("BMW, Toyota");
    });
  });

  describe('test carFuelConsumption', () => {
    it('should return an Error for invalid input', () => {
      expect(() => chooseYourCar.carFuelConsumption('', 1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption(1, '')).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption('', '')).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption(1, 0)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption(0, 1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption(1, -1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption(-1, 1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption(-1, -1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption(0, 0)).to.throw("Invalid Information!");
    });

    it('happy path', () => {
      expect(chooseYourCar.carFuelConsumption(100, 15)).to.equal(`The car burns too much fuel - 15.00 liters!`);
      expect(chooseYourCar.carFuelConsumption(100, 10)).to.equal(`The car burns too much fuel - 10.00 liters!`);
      expect(chooseYourCar.carFuelConsumption(100, 9)).to.equal(`The car burns too much fuel - 9.00 liters!`);
    });


    it('happy path, edge case', () => {
      expect(chooseYourCar.carFuelConsumption(200, 5)).to.equal(`The car is efficient enough, it burns 2.50 liters/100 km.`);
      expect(chooseYourCar.carFuelConsumption(100, 2)).to.equal(`The car is efficient enough, it burns 2.00 liters/100 km.`);
      expect(chooseYourCar.carFuelConsumption(50, 2)).to.equal(`The car is efficient enough, it burns 4.00 liters/100 km.`);
      expect(chooseYourCar.carFuelConsumption(100, 2.5)).to.equal(`The car is efficient enough, it burns 2.50 liters/100 km.`);
      expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`);
    });
  });
});