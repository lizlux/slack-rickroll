var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// ENV vars SLACK_API_KEY, SLACK_API_SECRET, SLASH_COMMAND_TOKEN, TEAM_SLASH_COMMAND_TOKEN

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {

	// TODO: use handlebars here

	res.send('<p>Hello Slack!\n</p><p><a href="https://slack.com/oauth/authorize?scope=commands&client_id=21371350451.21380494640"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"></a></p>');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});

app.post('/slack/rickroll', function(req, res) {
	var urls,
		index,
		response;

	console.log('Received Rick Roll request');
	console.log(req.body);

	// Urls courtesy of http://brojsimpson.com/pranks/hidden-rick-roll-video-link-collection-rickrolled/
	urls = [
		{
			description: 'THE ORIGINAL RICKROLL’D VIDEO (Not Hidden)',
			url: 'http://www.youtube.com/watch?v=oHg5SJYRHA0'
		},
		{
			description: 'News Alert – Breaking News',
			url: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'
		},
		{
			description: 'Coldplay – True Love [new album Ghost Stories song]',
			url: 'http://youtu.be/hVzINKRbekY'
		},
		{
			description: 'Lala Showers – Tiki Bar TV',
			url: 'http://www.youtube.com/watch?v=r8tXjJL3xcM'
		},
		// Rick Roll "worship" link
		{
			description: 'OMG check it out.',
			url: 'http://rick.amigocraft.net'
		}
	];

	index = Math.floor(Math.random() * urls.length);

	response = {
		"response_type": "in_channel",
		"text": urls[index].description + ' ' + urls[index].url
	};

	res.send(response);
});