import fastify from 'fastify';
import cors from '@fastify/cors';
import fastifyStatic from '@fastify/static';
import Knex from 'knex';
import { Model } from 'objection';
import qs from 'qs';

import knexConfig from '../knexfile.js';
import { initApi } from './api/api.js';
import { ENV, ExitCode } from './common/enums/enums.js';
import { recipe } from './services/services.js';

const app = fastify({
  logger: {
    prettyPrint: {
      ignore: 'pid,hostname'
    }
  },
  querystringParser: str => qs.parse(str, { comma: true })
});

const knex = Knex(knexConfig);
Model.knex(knex);

app.register(cors);
app.register(initApi, {
  services: {
    recipe
  },
  prefix: ENV.APP.API_PATH
});

const staticPath = new URL('../../client/build', import.meta.url);
app.register(fastifyStatic, {
  root: staticPath.pathname,
  prefix: '/'
});

app.setNotFoundHandler((req, res) => {
  res.sendFile('index.html');
});

const startServer = async () => {
  try {
    await app.listen(ENV.APP.PORT);
  } catch (err) {
    app.log.error(err);
    process.exit(ExitCode.ERROR);
  }
};
startServer();
