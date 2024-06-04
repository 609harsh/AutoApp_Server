import { Module } from '@nestjs/common';
import { ComponentController } from './component.controller';
import { ComponentService } from './component.service';
import { ComponentEntity } from './entities/component.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/auth/entities/user.entity';
import { AppComponentEntity } from './entities/appcomponent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComponentEntity, User, AppComponentEntity])],
  controllers: [ComponentController],
  providers: [ComponentService]
})
export class ComponentModule { }
