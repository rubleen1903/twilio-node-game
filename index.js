ACCOUNT_SID = 'AC9344fe64135f35b17322c9ef9eb99c19'
AUTH_TOKEN = 'e8cf287cf801922d1df3847c5db89bc3'
SERVICE_SID = 'ISda9e67af33b912dbddcefb3846856b7f'
const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

// User-defined function to send bulk SMS to desired
// numbers bypassing numbers list as parameter
function sendBulkMessages(messageBody, numberList)
{
	var numbers = [];
	for(i = 0; i < numberList.length; i++)
	{
		numbers.push(JSON.stringify({
			binding_type: 'sms', address: numberList[i]}))
            console.log('sms sent to :'+numberList[i])
	}

	const notificationOpts = {
	toBinding: numbers,
	body: messageBody,
	};

	client.notify
	.services(SERVICE_SID)
	.notifications.create(notificationOpts)
	.then(notification => console.log(notification.sid))
	.catch(error => console.log(error));
}
	
// Sending our custom message to all numbers
// mentioned in array.
sendBulkMessages('Greeting from Rubleen Kaur , Welcome to the game!',
	['+919212489793', '+919810829793','+918800817135','+918368308855','+917666815257']) // Example +919999999999
