import express from 'express';
import 'express-async-errors';
import './database/connection';
import './database/googleCloudStorage';

import { errorHandler } from './shared/middlewares/errorHandler';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

export { app };