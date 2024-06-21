import app from './server.js';
import * as functions from 'firebase-functions';

export const api = functions.https.onRequest(app);