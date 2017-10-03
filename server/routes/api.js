const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/',(req,res) => {
	res.send('Hello World! from Express');
});

router.get('/posts',(req,res) => {
	axios.get('https://jsonplaceholder.typicode.com/posts').
	then(posts => {
		res.status(200).json(posts.data);
	}).catch(error => {
		res.status(404).send(error);
	});
});

module.exports = router;