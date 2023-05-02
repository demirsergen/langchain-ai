const axios = require('axios');
const express = require('express');
const app = express();
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Methods', '*');
  res.set('x-requested-with', 'XMLHttpRequest');
  res.set(
    'Access-Control-Expose-Headers',
    'Content-Encoding,api_key'
  );
  res.set('origin', 'http://localhost:3000');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  next();
});

app.get('/', (req, res) => {
  let { addressName, placeName } = req.body;
  axios
    .get(
      `https://serpapi.com/search.json?engine=google&q=${placeName}&location=${addressName}&google_domain=google.com&gl=us&hl=en&api_key=y${process.env.NODE_SERPAPI_KEY}`
    )
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error.response.data);
    });
});
