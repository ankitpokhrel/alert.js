window.onload = function() {					
	setTimeout(function() {
		alertjs.show({
				heading: 'Welcome to alert.js!',
				subHeading: 'Beautifully crafted responsive javascript alert boxes',
				message: '#info',
				buttons: {
					OK: {
						label: 'Continue',						
					}
				},
				effect: 'shake',
				overlay: false,
			});
		}, 	10000);
}

function fromRight() {			
	alertjs.show({
		type: 'prompt',
		heading: 'Alert.js',
		message: 'Enter your name to continue:',
		buttons: {
			OK: {
				label: 'Continue',
				attrs: {
					'class': 'btn btn-ok',
					id: 'ok_btn'
				}
			},
			CANCEL: {
				label: 'Go Back',
				attrs: {
					'class': 'btn btn-cancel'
				}
			}
		},
		success: function(val) {
			console.log(val);
		},
		cancelled: function() {

		},
		complete: function(status, val) {
			if( status ) {
				console.log(val);
			} else {
				console.log('empty');
			}
		},
		wait: 0,
		effect: 'ease-in-bounce',
		from: 'right'
	});
}