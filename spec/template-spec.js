import { Tamagotchi } from './../src/tamagotchi.js'
import { Snacks } from './../src/snacks.js';
describe('Tamagotchi', function(){
  let newPet = new Tamagotchi("Cam");
  let donut = new Snacks('donut')

  beforeEach(function(){
    jasmine.clock().install();
    newPet.setNeeds();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
    newPet.setReset();
  });

  it('should reduce hunger incrementally', function() {
    jasmine.clock().tick(2001);
    expect(newPet.hunger).toEqual(80);
  });
  it('should reduce rest incrementally', function() {
    jasmine.clock().tick(2001);
    expect(newPet.rest).toEqual(80);
  });
  it('should reduce happiness incrementally', function() {
    jasmine.clock().tick(4001);
    expect(newPet.happiness).toEqual(60);
  });
  it('should increase hunger by increments of 5', function() {
    jasmine.clock().tick(5001);
    expect(newPet.hunger).toEqual(50);
    newPet.giveFood(donut.snackType());
    expect(newPet.hunger).toEqual(70);
  });
  it('should increase rest by increments of 5', function() {
    jasmine.clock().tick(6001);
    expect(newPet.rest).toEqual(40);
    newPet.giveSleep(2);
    expect(newPet.rest).toEqual(50);
  });
  it('should increase happiness by increments of 5', function() {
    jasmine.clock().tick(2001);
    expect(newPet.happiness).toEqual(80);
    newPet.giveHappiness(1);
    expect(newPet.happiness).toEqual(85);
  });
  it('should decrease happiness by increments of 15', function() {
    jasmine.clock().tick(6001);
    expect(newPet.happiness).toEqual(35)
  });

});
