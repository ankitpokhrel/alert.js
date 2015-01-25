//Tests for alert.js
describe('Alert library', function() {
	var a = alertjs.show({
				type: 'prompt',
				heading: 'Test heading',
				subHeading: 'Test subheading',
				message: 'Test message',
				buttons: {
					OK: {
						label: 'Continue',
						attrs: {
							id: 'continue_btn'
						}
					},
					CANCEL: {
						label: 'Back',
						attrs: {
							'class': 'btn btn-back'
						}
					}
				},
				wait: 100,
				effect: 'ease-in-bounce',
				from: 'left',
				success: function( val ) {
					return true;
				}						
			});

	//=======================================//
	//			Options 				 	 //
	//=======================================//
	
	describe('Options', function() {
		it('should have type', function() {
			expect(a.artisan.options.type).toEqual('prompt');
		});

		it('should have heading', function() {
			expect(a.artisan.options.heading).toEqual('Test heading');
		});

		it('should have subheading', function() {
			expect(a.artisan.options.subHeading).toEqual('Test subheading');
		});

		it('should have message', function() {
			expect(a.artisan.options.message).toEqual('Test message');
		});

		it('should wait 100ms', function() {
			expect(a.artisan.options.wait).toEqual(100);
		});

		it('should have bounce effect', function() {
			expect(a.artisan.options.effect).toEqual('ease-in-bounce');
		});

		it('should slide from left', function() {
			expect(a.artisan.options.from).toEqual('left');
		});

		it('should have OK button', function() {
			var ok = {
						label: 'Continue',
						attrs: {
							id: 'continue_btn',
							'class': 'alert-js-btn alert-js-btn-ok'
						}
					};
			expect( JSON.stringify(a.artisan.options.buttons.OK) ).toEqual( JSON.stringify(ok) );
		});

		it('should have Cancel button', function() {
			var cancel = {
						label: 'Back',
						attrs: {
							id: 'btn_cancel',
							'class': 'alert-js-btn alert-js-btn-cancel btn btn-back'
						}
					};
			expect( JSON.stringify(a.artisan.options.buttons.CANCEL) ).toEqual( JSON.stringify(cancel) );
		});

		it('should have success callback', function() {
			expect(typeof a.artisan.options.success).toBe('function');
		});

		it('should have cancelled callback', function() {
			expect(a.artisan.options.cancelled).toBeNull();
		});

		it('should have complete callback', function() {
			expect(a.artisan.options.complete).toBeNull();
		});
	});

	//=======================================//
	//			Creator 				 	 //
	//=======================================//
	describe('OK Button', function() {
		it('create htmlnode for okButton', function() {
			expect(a.artisan.okButton).not.toBeNull();

			var btn = '<button class="alert-js-btn alert-js-btn-ok" id="continue_btn">Continue</button>';
			expect(a.artisan.okButton.outerHTML).toBe(btn);
		});
	});

	describe('CANCEL Button', function() {
		it('create htmlnode for cancelButton', function() {
			expect(a.artisan.cancelButton).not.toBeNull();

			var btn = '<button class="alert-js-btn alert-js-btn-cancel btn btn-back" id="btn_cancel">Back</button>';
			expect(a.artisan.cancelButton.outerHTML).toBe(btn);
		});
	});

	describe('Footer', function() {
		it('create htmlnode for footer element', function() {
			expect(a.artisan.footer).not.toBeNull();

			var footer = '<footer class="alert-js-footer" id="alertJSfooter">' + 
							'<button class="alert-js-btn alert-js-btn-ok" id="continue_btn">Continue</button>' + 
							'<button class="alert-js-btn alert-js-btn-cancel btn btn-back" id="btn_cancel">Back</button>' + 
						'</footer>';
			expect(a.artisan.footer.outerHTML).toBe(footer);
		});
	});

	describe('Heading', function() {
		it('create htmlnode for heading element', function() {
			expect(a.artisan.heading).not.toBeNull();

			var heading = '<h1>Test heading</h1>';
			expect(a.artisan.heading.outerHTML).toBe(heading);
		});
	});

	describe('Sub Heading', function() {
		it('create htmlnode for subheading element', function() {
			expect(a.artisan.subHeading).not.toBeNull();

			var subHeading = '<h2>Test subheading</h2>';
			expect(a.artisan.subHeading.outerHTML).toBe(subHeading);
		});
	});

	describe('Header', function() {
		it('create htmlnode for header element', function() {
			expect(a.artisan.header).not.toBeNull();

			var header = '<header class="alert-js-header alert-js-header-primary" id="alertJSheader">' + 
							'<h1>Test heading</h1>' + 
							'<h2>Test subheading</h2>' + 
						'</header>';
			expect(a.artisan.header.outerHTML).toBe(header);
		});
	});

	describe('Body', function() {
		it('create htmlnode for main body element', function() {
			expect(a.artisan.body).not.toBeNull();

			var body = '<div class="alert-js-body" id="alertJSbody">' + 
							'Test message' + 
							'<input class="alert-js-input" id="alertJSinput" type="text">' + 
						'</div>';
			expect(a.artisan.body.outerHTML).toBe(body);
		});
	});

	describe('Input', function() {
		it('create htmlnode for input element', function() {
			expect(a.artisan.input).not.toBeNull();

			var inp = '<input class="alert-js-input" id="alertJSinput" type="text">';
			expect(a.artisan.input.outerHTML).toBe(inp);
		});
	});

	describe('Outer Layer', function() {
		it('check entire generated htmlnode', function() {
			expect(a.artisan.layer).not.toBeNull();

			var html = '<section class="alert-js alert-js-animation-left" id="alertJS">' +
							'<header class="alert-js-header alert-js-header-primary" id="alertJSheader">' +
								'<h1>Test heading</h1>' + 
								'<h2>Test subheading</h2>' + 
							'</header>' + 
							'<div class="alert-js-body" id="alertJSbody">' + 
								'Test message' + 
								'<input class="alert-js-input" id="alertJSinput" type="text">' + 
							'</div>' + 
							'<footer class="alert-js-footer" id="alertJSfooter">' + 
								'<button class="alert-js-btn alert-js-btn-ok" id="continue_btn">Continue</button>' + 
								'<button class="alert-js-btn alert-js-btn-cancel btn btn-back" id="btn_cancel">Back</button>' + 
							'</footer>' + 
						'</section>';
			expect(a.artisan.layer.outerHTML).toBe(html);
		});
	});	

	describe('Overlay', function() {
		it('create htmlnode for overlay element', function() {
			expect(a.artisan.overlay).not.toBeNull();

			var overlay = '<div class="alert-js-overlay"></div>';
			expect(a.artisan.overlay.outerHTML).toBe(overlay);
		});
	});

});
