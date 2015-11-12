//$( "p" ).toggle( "slow" );
//$( "p" ).slideUp( 1500 );
//$( "p" ).hide( 1500 );

var thermostat = new Thermostat

$( '#power_saving_mode_on' ).click( function() {
	$(this).css('background-color', 'green' );
	//$(this).animate({ opacity: '0.1' }, 500);
	$('#power_saving_mode_off').css('background-color', 'white' );
	thermostat.powerSavingModeOn();
});

$( '#power_saving_mode_off' ).click( function() {
	$(this).css('background-color', 'red' );
	$('#power_saving_mode_on').css('background-color', 'white' );
	thermostat.powerSavingModeOff();
});

$( '#temperature_up' ).click( function() {
	thermostat.up();
	$( '#temperature' ).text('The current temperature is ' + thermostat.temperature());
});

$( '#temperature_down' ).click( function() {
	thermostat.down();
	$( '#temperature' ).text('The current temperature is ' + thermostat.temperature());
});

$( '#reset' ).click( function() {
	thermostat.resetButton();
	$( '#temperature' ).text('The current temperature is ' + thermostat.temperature());
});
