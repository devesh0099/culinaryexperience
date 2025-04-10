import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';
const { Pool } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const socketPath = path.resolve(__dirname, '../connection');

const pgPool = new Pool ({
    user: 'appuser',
    password: '1234',
    host: 'localhost',
    port: 5000,
    database: 'appdb',
    host: socketPath,
  });

  export default pgPool;
