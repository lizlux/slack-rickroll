var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello Slack!\n');
});
app.listen(3001);

console.log('Listening on port 3001...');

app.get('/slack/rickroll', function(req, res) {
	var urls,
		index;

	console.log('Received Rick Roll request');

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
		{
			description: 'Rick Roll “Worship” Link',
			url: 'http://rick.amigocraft.net'
		}
	];

	index = Math.floor(Math.random() * urls.length);

	console.log(urls[index]);

	res.send(urls[index]);
});