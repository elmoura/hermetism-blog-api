import { Storage } from '@google-cloud/storage';
import path from 'path';
import 'dotenv/config';

const storage = new Storage({
  keyFilename: path.join(__dirname, '..', '..', 'Blog-693d8f0367f5.json'),
  projectId: process.env.GCLOUD_PROJECT_ID
});

export { storage };