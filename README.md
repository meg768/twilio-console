# Twilio Console

Intercepts messages to console and sends them to Twilio.

## Installation

````bash
npm install twilio-console --save
````

## Usage

````javascript
require('twilio-console');
````

Every call to **console.info**, **console.warn** or **console.error** will send a message
using Twilio.

Make sure the following environment variables are defined.
See https://www.npmjs.com/package/dotenv for more information about defining environment variables.

- TWILIO_SID
- TWILIO_TOKEN
- TWILIO_FROM
- TWILIO_TO
