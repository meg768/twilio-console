# Twilio Console

Intercepts messages to console and sends them via Twilio.

## Installation

````bash
npm install twilio-console --save
````

## Usage

````javascript
require('twilio-console');
````

After this, every call to **console.info**, **console.warn** or **console.error** will send a message
using Twilio.

Make sure the following environment variables are defined.

- TWILIO_SID
- TWILIO_TOKEN
- TWILIO_FROM
- TWILIO_TO

See https://www.npmjs.com/package/dotenv for more information about defining environment variables.
