import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Inbox extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
