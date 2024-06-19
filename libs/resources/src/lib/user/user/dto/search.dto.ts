import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { User } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserDto implements SearchDto<User> {
  @SearchProperty<User>(['username']) search: FindOptionsWhere<User>;
}
