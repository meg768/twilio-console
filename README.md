# Twilio Console

**Under construction**

Intercepts messages to console and sends them to Twilio.

## Installation

````bash
npm install twilio-console --save
````

## Usage

````javascript
require('twilio-console');
````

Every call to console.info, console.warn, console.error will send a message
using Twilio.
