import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { SequelizeModule } from "@nestjs/sequelize"

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "../.env"
    }),
    //  TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (config: ConfigService) => ({
    //     // host: 'localhost',
    //     // ssl: true,
        
    //     type: config.get<'aurora-data-api'>('TYPEORM_CONNECTION'),
    //     username: config.get<string>('TYPEORM_USERNAME'),
        //  password: config.get<string>('TYPEORM_PASSWORD'),
    //     // password: '1234567',

    //     database: config.get<string>('TYPEORM_DATABASE'),
    //     port: Number(config.get<number>('TYPEORM_PORT')),
    //     entities: [__dirname + 'dist/**/*.entity{.ts, .js}'],
    //     // entities: ["dist/**/*.entity.js"],
    //     synchronize: true,
    //     autoLoadEntities: true,
    //     logging: true,
    //     // logger: 'advanced-console'
        
    //    })
    //  })
    SequelizeModule.forRoot({
      // dialectOptions: {
      //   ssl: {
      //       require: true,
      //       rejectUnauthorized: false
      //   }
      // },
      // ssl: true,
      dialect: 'postgres',
      host: 'localhost',
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      // models: [Note, Category],
      autoLoadModels: true,
    })
    
   ],
  providers: [],
})
export class AppModule {}
