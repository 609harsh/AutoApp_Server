import { AppEntity } from 'src/apps/entities/apps.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  PrimaryColumn,
} from 'typeorm';
import { ComponentEntity } from './component.entity';

@Entity({ name: 'appcomponents' })
// @Index('idx_component_page_id', ['pageId'])
export class AppComponentEntity {
  @PrimaryColumn()
  appId: string;

  @Column('simple-json', { nullable: true })
  data: any;
}
