import 'babel-polyfill'; // allows async methods to run without error
import express from 'express';

// Import the store here because we need to fetch all data before we attempt to render anything
import createStore from './helpers/createStore';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get(
  '*',
  (req, res) => {
    const store = createStore();

    // Fetch logic and then pass it to the renderer

    res.send(renderer(req, store));
  },
);

app.listen(
  3000,
  () => {
    console.log('#### START on port: 3000');
  },
);
