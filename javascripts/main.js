window.onload = function() {
			
	setTimeout(function() {
		alertjs.show({
				title: 'Welcome to alert.js!',
				text: '#info',
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

function minimal() {
	alertjs.show({title: 'Alert.js', text: 'Awesome alert!', from: 'top'});
}

function fromTop() {			
	alertjs.show({
		title: 'Error!',
		text: 'You must fill all fields to continue',
		from: 'top',
		effect: 'ease-in-bounce',
		success: function() {
			//user clicked ok button
		},
		cancelled: function() {
			//user clicked cancel button
		},
		complete: function( val ) {
			//this callback is available everytime
			//val will help you decide if user clicked
			//OK or Cancel
		}
	});
}

function fromLeft() {	
	var opt = {
		type: 'confirm',
		title: 'Confirm',
		text: 'Are you sure you want to perform this action?',
		buttons: {
			OK: {
				label: 'Yes',
				attrs: {
					'class': 'btn btn-ok',
					id: 'ok_btn'
				}
			},
			CANCEL: {
				label: 'No',
				attrs: {
					'class': 'btn btn-cancel'
				}
			}
		},
		wait: 100,
		effect: 'ease-in-bounce',
		from: 'left',				
		success: function() {
			console.log('You clicked success');
		},
		cancelled: function() {
			console.log('You clicked cancel');
		},
		complete: function(val) {
			if( val ) {
				console.log('You clicked success');
			} else {
				console.log('You clicked cancel');
			}
			
		}
	};

	alertjs.show(opt);

}

function fromRight() {			
	alertjs.show({
		type: 'prompt',
		title: 'Alert.js',
		text: 'Enter your name to continue:',
		buttons: {
			OK: {
				label: 'Continue',
				attrs: {
					'class': 'btn btn-ok',
					id: 'ok_btn'
				}
			},
			CANCEL: {
				label: 'Go Back'
			}
		},
		success: function(val) {
			var msg = 'Your name is ' + val;
			if( !val ) {
				msg = 'You didn\'t type your name!';
			}

			alertjs.show({
				title: 'Alert.js',
				from: 'top',
				effect: 'ease-in-bounce',
				text: msg
			});
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

function fromBottom() {			
	alertjs.show({
		type: 'confirm',
	    title: 'Delete Permanently',
	    text: 'Are you sure you want to delete the file permanently?',
	    from: 'bottom',
	    buttons: {
	        OK: {
	            label: 'Continue',
	            attrs: {
	                'class': 'continue btn',
	                id: 'continueBtn'
	            }
	        },
	        CANCEL: {
	            label: 'Go back',
	            attrs: {
	                'class': 'btn btn-back'
	            }
	        }
	    },
	    wait: 500	
	});
}