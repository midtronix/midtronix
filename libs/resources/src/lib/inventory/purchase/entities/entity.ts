import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Purchase extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
