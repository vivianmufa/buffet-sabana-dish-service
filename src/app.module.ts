import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishesModule } from './dishes/dishes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host:config.get<string>('DATABASE_HOST'),
        port:config.get<number>('DATABASE_PORT'),
        username:config.get<string>('DATABASE_USERNAME'),
        password:config.get<string>('DATABASE_PASSWORD'),
        database:config.get<string>('DATABASE_NAME'),
        entities:["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
        logging: true,
        autoLoadEntities: true
      }),
      inject: [ConfigService]
    }),
    DishesModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
