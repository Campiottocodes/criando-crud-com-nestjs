import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { User, UserSchema } from './entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class UsersModule {}
