import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Category extends BaseEntity {
  @Column({ type: 'string', unique: true })
  name: string;
}
