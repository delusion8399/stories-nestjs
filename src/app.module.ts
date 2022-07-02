import { Module } from '@nestjs/common';
import { StoryModule } from './story/story.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    StoryModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.DB_URI,
      }),
    }),
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
