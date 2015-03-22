![Travis CI Build](https://travis-ci.org/ankitpokhrel/alert.js.svg?branch=master) [![devDependency Status](https://david-dm.org/ankitpokhrel/alert.js/dev-status.svg)](https://david-dm.org/ankitpokhrel/alert.js#info=devDependencies) [![Codacy Badge](https://www.codacy.com/project/badge/de58b013d63b4756a87d417d323ba9da)](https://www.codacy.com/public/ankitpokhrel/alert.js) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) 
# Alert.js
Beautifully crafted responsive javascript alert boxes.

![Alert.js](http://ankitpokhrel.com.np/alert.js/img/alertjs.gif)
> This project is written in plain javascript and has no dependencies.

## Version
Current version is v0.0.0 (~6.5KB minified)

## We are currently working on
* ~~Demo page~~
* ~~Extended documentation~~
* Better tests
* New features

## Browser Support
All modern browsers and Internet Explorer 9+

## Installation  
```
bower install alert.js
```

## Getting Started
1. Include script  
	```
	<script src="dist/alert.min.js"></script>
	```

2. Include style  
	```
	/* core css */
	<link rel="stylesheet" href="dist/alert.core.min.css" />

	/* theme: default or lite */
	<link rel="stylesheet" href="dist/alert.default.min.css" />
	```

## Basic Usage
**Alert box**  
```
alertjs.show({
	title: 'Error!',
	text: 'You must fill all fields to continue',
	from: 'top', //drop from top,
	effect: 'ease-in-bounce',
	wait: 500,
	success: function() {
		//user clicked OK button
	},
	cancelled: function() {
		//user clicked cancel button
	},
	complete: function( val ) {
		//this callback is available everytime.
		//val determines what user clicked.
	}
});
```
![Alert](http://ankitpokhrel.com.np/alert.js/img/alertt.gif)

**Confirm dialog**  
```
alertjs.show({
	type: 'confirm',
	title: 'Confirm',
	text: 'Are you sure you want to perform this action?',
	from: 'left', //slide from left		
	complete: function( val ) {
		if( val ) {
			//clicked ok
		} else {
			//clicked cancel
		}
	}
});
```
![Confirm](http://ankitpokhrel.com.np/alert.js/img/confirm.gif)

**Prompt dialog**  
```
alertjs.show({
	type: 'prompt',
	title: 'Please enter your name to continue',
	text: 'Enter your name here:',
	from: 'right', //slide from left
	success: function( val ) {
		//user clicked OK button
		//input box value will be available here
		var value = 'Your name is ' + val;
		if( val === '' ) {
			value = 'You didn\'t type anything!';
		}
		alertjs.show({
			title: 'Alert.js',
			from: 'top',
			effect: 'ease-in-bounce',
			text: value
		});
	},
	cancelled: function() {
		//user clicked cancel button
	},
	complete: function( status, val ) {
		console.log(status, val);
	}
});
```
![Prompt](http://ankitpokhrel.com.np/alert.js/img/prompt.gif)

**Using custom HTML for message**  
HTML can be in any format but it should be wrapped with an ID
```
<div id="myCustomDialog" style="display: none">
	<div class="dialogWrapper">
		Like us on facebook
		<!-- facebook like box -->
	</div>
</div>
```

Call alert box as follow
```
alertjs.show({
	title: 'Error!',
	text: '#myCustomDialog', //must be an id
	from: 'top'
});
```

**Custom form**  
You can also use custom form in alert box. Data from evey input fields will be available in name value pairs in success and complete callback. If the name attribute is not provided, numeric index is used.

```
//For example in success callback
//you can do something like this
success: function( val ) {
			var str = '';
			for( var prop in val ) {
				str += "<label>" + prop + ":</label> " + val[prop] + "<br/>";
			}

			alertjs.show({
				title: 'You entered following values:',
				text: str
			});
		}
```
![Custom Form](http://ankitpokhrel.com.np/alert.js/img/form.gif)

**Using custom attribute for buttons**  
You can provide label and attributes for button as shown below.
```
alertjs.show({
	type: 'confirm',
	title: 'Delete Permanently',
	text: 'Are you sure you want to delete the file permanently?',
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
```

**Display alert 10sec after site loads**  
```
//Demo: Like the one displayed at the very beginning of this page
window.onload = function() {
	setTimeout(function() {
		alertjs.show({
				title: 'Welcome to our site!',
				text: 'Thank you for visiting our site.',
				buttons: {
					OK: {
						label: 'Continue'
					}
				},
				effect: 'shake',
				overlay: false,
			});
		}, 10000);
}
```

## Available Options
 Option     | Description                                                                                                      | Default      
------------|------------------------------------------------------------------------------------------------------------------|--------------
 type       | Alert box type: `alert`, `confirm` or `prompt`                                                                   | alert        
 title    | Main heading                                                                                                     |         
 subtitle | Displayed below main heading                                                                                     |         
 text    | Message to display in body section. `string` or `#elementId`. You can provide id of an element to get html data. |         
 buttons    | Lists button settings. Can be `false`.                                                                           |              
 OK         | Used with buttons and provides settings for `OK` button.     | `{label: 'Ok', attrs: {id: 'btn_ok', 'class': 'alert-js-btn alert-js-btn-ok'}}`
 CANCEL     | Used with buttons and provides settings for `CANCEL` button. | `{label: 'Ok', attrs: {id: 'btn_ok', 'class': 'alert-js-btn alert-js-btn-ok'}}`
 overlay    | Show/hide overlay. `true` or `false`.                                                                            | true         
 header     | Show/hide header element. `true` or `false`.                                                                     | true  
 effect     | Animation effect to show. `ease-in`, `ease-in-bounce` or `shake`                                                 | ease-in      
 from       | Determines where to start effect from. `top`, `left`, `right`, `bottom`, `middle`.                               | top          
 wait       | Delay in milliseconds. Wait for certain time before showing alert.                                               | 0            

## Callbacks
| Callback     | Description                                                
|--------------|------------------------------------------------------------
| success      | Available when user clicks OK button. Gets input value when type is prompt.
| cancelled    | Available when user clicks CANCEL button. Gets input value when type is prompt.
| complete     | This callback is available both when user clicks OK and CANCEL button. Gets a value to determine what user clicked. Also gets input value when type is prompt.

## Platforms we are testing on

* Ubuntu 14.04 LTS  
	- Mozilla Firefox 34+, Chrome & Chromium 38+, Opera 25+  

* Windows 7 & 8  
	- Internet Explorer 9+, Firefox 34+, Chrome 38+, Opera 25+, Safari 5.1.7  

* iPhone 4 & 5  
* Android (Samsung & Nexus)  

### Setting up entire project locally
1. Clone the repo  
	```
	git clone git@github.com:ankitpokhrel/alert.js.git
	```  

2. Install dev dependencies  
	```
	 npm install  
	 npm update
	```  

3. Make changes. jshint and uglify using grunt.  
	```
	grunt
	```

4. Run jasmine tests using karma  
	```
	karma start
	```
	
## Contribution
Feel free to fork, try and report any bug found. Pull requests, issues, and plugin recommendations are more than welcome!
	
## Known bugs
1. Animation is not smooth sometimes.

## License

alert.js is licensed under MIT http://www.opensource.org/licenses/MIT

## Copyright

Copyright &copy;, Ankit Pokhrel (http://ankitpokhrel.com.np, @ankitpokhrel)
[![Analytics](https://ga-beacon.appspot.com/UA-59482306-1/ankitpokhrel/readme?pixel)](https://github.com/igrigorik/ga-beacon)
