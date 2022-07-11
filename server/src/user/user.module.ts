import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleStrategy } from 'src/auth/google.strategy';
import { CommunityLikeEntity } from 'src/common/entities/community-like.entity';
import { CommunityEntity } from 'src/community/community.entity';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      CommunityLikeEntity,
      CommunityEntity,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
