import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: jwt}),
    JwtModule
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
