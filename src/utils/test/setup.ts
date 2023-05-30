import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { env } from '../../env';

module.exports = async () => {
  const connection = await createConnection({
    type: 'mysql',
    host: env.db.host,
    username: env.db.username,
    password: env.db.password,
    logging: env.db.logging,
    supportBigNumbers: true,
  });

  await connection.query('DROP DATABASE IF EXISTS test_colors;');
  await connection.query('CREATE DATABASE test_colors;');
  await connection.close();
};
