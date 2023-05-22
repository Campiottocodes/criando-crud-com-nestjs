import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://viniciusjcampiotto:RTaRRE5jc7TA7As5@cluster0.yvwypqx.mongodb.net/',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
