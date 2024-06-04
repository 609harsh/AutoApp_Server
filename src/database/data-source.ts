
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  // entities: [User, AppEntity, ComponentEntity],
  // entities: ['dist/**/ *.entity{ .ts,.js }'],
  // migrations: ['dist/src/migration/*{.ts,.js}'],
  // migrationsTableName: 'migrations_TypeORM',
  // entities: ['dist/**/*.entity.js'],
  // migrations: ['src/database/migrations/*.ts'],
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js']
});