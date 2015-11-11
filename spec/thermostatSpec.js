describe('Thermostat', function() {

	var thermostat;
	var temp = 20;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	describe('#temperature', function () {
		it('has a default temprature on initialization', function () {
			expect(thermostat.temperature()).toBe(temp);
		});
	});
});