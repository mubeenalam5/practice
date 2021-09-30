import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/posts'), PostsModule],
})
export class AppModule {}
