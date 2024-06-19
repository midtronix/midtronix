import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Sku } from '../entities';

@Exclude()
export class QuerySkuDto extends BaseQueryDto implements QueryDto<Sku> {
  @QueryProperty() description: string;
  @QueryProperty() sku: string;
  @QueryProperty() name!: string;
  @Exclude() skuDetails: unknown;
}
