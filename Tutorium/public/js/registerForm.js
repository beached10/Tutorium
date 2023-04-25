const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./user');

const app = express();

mongoose.connect('mongodb://localhost/educational_website', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/register', function(req, res) {
	var user = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		role: req.body.role
	});

	user.save(function(err) {
		if (err) {
			res.status(500).json({ message: 'Error registering user' });
		} else {
			res.json({ message: 'User registered successfully' });
		}
	});
});

app.listen(3000, function() {
	console.log('Server started on port 3000');
});
