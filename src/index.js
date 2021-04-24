import 'regenerator-runtime/runtime';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import Routes from './client/Routes';
// Create the store here because we need to fetch all data before we attempt to render anything
import createStore from './helpers/createStore';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get(
  '*',
  (req, res) => {
    const store = createStore();

    // Match the url the user has requested with the Routes configuration

    // promises will be an array of all the promises created by the loadData methods
    const promises = matchRoutes(Routes, req.path).map(
      ({ route }) => route.loadData
        ? route.loadData(store) // if our route has a loaddata method attached to it, we invoke it passing to it the whole store
        : null,
    );

    Promise.all(promises).then(() => res.send(renderer(req, store)));
  },
);

app.listen(
  3000,
  () => {
    console.log('#### START on port: 3000');
  },
);
