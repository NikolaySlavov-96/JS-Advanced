const { expect } = require(`chai`);
const { rentCar, findNewApartment } = require(`./findApartment`);

describe('findNewApartment', () => {
  describe('isGoodLocation', () => {
    it('sofia Varna Plovdiv', () => {
      expect(findNewApartment.isGoodLocation('Pleven', true)).to.be.equal('This location is not suitable for you.')
      expect(findNewApartment.isGoodLocation('Burgas', true)).to.be.equal('This location is not suitable for you.')
      expect(findNewApartment.isGoodLocation('Vidin', true)).to.be.equal('This location is not suitable for you.')
    });

    it('second param is False', () => {
      expect(findNewApartment.isGoodLocation('Sofia', false)).to.be.equal('There is no public transport in area.');
      expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.be.equal('There is no public transport in area.');
      expect(findNewApartment.isGoodLocation('Varna', false)).to.be.equal('There is no public transport in area.');
    })
    it('second param is True', () => {
      expect(findNewApartment.isGoodLocation('Sofia', true)).to.be.equal('You can go on home tour!')
      expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.be.equal('You can go on home tour!')
      expect(findNewApartment.isGoodLocation('Varna', true)).to.be.equal('You can go on home tour!')
    })

    it('throw', () => {
      expect(() => findNewApartment.isGoodLocation(0, true)).to.throw('Invalid input')
      expect(() => findNewApartment.isGoodLocation('Plovdiv', 'true')).to.throw('Invalid input')
    })
  });

  describe('isLargeEnough', () => {
    it('return', () => {
      expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.be.equal('50, 60')
      expect(findNewApartment.isLargeEnough([40, 51, 60], 50)).to.be.equal('51, 60')
      expect(findNewApartment.isLargeEnough([40, 49, 60], 50)).to.be.equal('60')
    });

    it('throw', () => {
      expect(() => findNewApartment.isLargeEnough([], 50)).to.throw('Invalid input!')
      expect(() => findNewApartment.isLargeEnough([50], '50')).to.throw('Invalid input!')
      expect(() => findNewApartment.isLargeEnough('50', 50)).to.throw('Invalid input!')
    });
  });

  describe('isItAffordable', () => {
    it('thow 0 or negative', () => {
      expect(() => findNewApartment.isItAffordable(0, 1)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(-1, 1)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(1, 0)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(1, -1)).to.throw('Invalid input!');
    });
    it('throw after send not number', () => {
      expect(() => findNewApartment.isItAffordable('1', 1)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(1, '1')).to.throw('Invalid input!');
    })

    it('not enought money', () => {
      expect(findNewApartment.isItAffordable(10, 9)).to.be.equal("You don't have enough money for this house!");
    });

    it('return afford this home', () => {
      expect(findNewApartment.isItAffordable(9, 10)).to.be.equal('You can afford this home!')
      expect(findNewApartment.isItAffordable(10, 10)).to.be.equal('You can afford this home!')
    })
  })
})