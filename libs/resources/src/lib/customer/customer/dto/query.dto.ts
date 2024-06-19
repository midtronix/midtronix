import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Customer } from '../entities';

@Exclude()
export class QueryCustomerDto
  extends BaseQueryDto
  implements QueryDto<Customer>
{
  @Exclude() password: string;
  @Exclude() permissions: string;
  @QueryProperty() username: string;
}
