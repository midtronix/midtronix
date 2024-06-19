import { Entity, Relation } from '@webpackages/core';
import { Profile } from '../../../common';

@Entity()
export class CustomerProfile extends Profile {
  @Relation({ type: 'owner', target: 'Customer' }) user: unknown;
}
