
var Twilio = require('twilio');
var util = require('util');
var methods = ['info', 'warn', 'error'];
var output = {};

methods.forEach(function(name) {
	output[name] = console[name];
});

var twilioConsole = module.exports = function(options) {

	options = options || {};

	var sid    = process.env.TWILIO_SID;
	var token  = process.env.TWILIO_TOKEN;
    var from   = process.env.TWILIO_FROM;
    var to     = process.env.TWILIO_TO;

	if (sid == undefined || token == undefined || from == undefined || to == undefined) {
		output.warn('Environment variables TWILIO_SID/TWILIO_TOKEN/TWILIO_FROM/TWILIO_TO not defined. SMS via Twilio will not be able to be sent.');
	}
	else {

		function send(payload) {
            return new Promise(function(resolve, reject) {
                try {
                    var twilio = Twilio(sid, token);
                    var options = {};

                    options.from = from;
                    options.to   = to;
                    options.body = payload.message;

                    twilio.messages.create(options).then(function(message) {
                        // ...
                    })
                    .catch(function(error) {
                        // ...
                    });

    			}
    			catch(error) {
    				output.error('Failed to send Twilio notification.', error.message);
    			}

            });
		};

		methods.forEach(function(name) {
			var method = output[name];

			console[name] = function() {
				var text = util.format.apply(util.format, arguments);

				send({priority:name == 'info' ? 0 : 1, message:text});
			    return method.apply(console, [text]);
			};
		});

	}

};

twilioConsole();
