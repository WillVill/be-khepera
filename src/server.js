import 'babel-core/register';
import 'babel-polyfill';

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import { PORT } from './constants';
import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || PORT;

// Error handling
app.use((err, request, response, next) => {
  console.log('Error', err);
  response.status(500).send('Something broke!')
})

app.use('/', routes);

app.listen(port);
console.log('Magic happens on port ' + port);