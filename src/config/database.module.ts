import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';



@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                url: process.env.DATABASE_URL,
                synchronize: true,
                // entities: ['dist/**/*.entity{.ts,.js }'],
                // entities: [User, AppEntity, ComponentEntity],
                // migrations: ['src/database/migrations/*.ts'],
                // entities: ['dist/**/ *.entity{ .ts,.js }'],
                // migrations: ['dist/src/migration/*{.ts,.js}'],
                // migrationsRun: true,
                // migrationsTableName: 'migrations_TypeORM',
                entities: ['dist/**/*.entity.js'],
                migrations: ['dist/database/migrations/*.js']
            }),
            inject: [ConfigService]
        })
    ]
})
export class DatabaseModule { }