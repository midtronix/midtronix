import { BaseEntityService } from '@webpackages/core';
import { UserProfile } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserProfileService extends BaseEntityService<UserProfile> {
  constructor(@InjectRepository(UserProfile) repo: Repository<UserProfile>) {
    super(repo);
  }
}
