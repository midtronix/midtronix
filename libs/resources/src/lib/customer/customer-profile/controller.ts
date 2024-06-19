import { Body, Param, Query } from '@nestjs/common';
import { CreateCustomerProfileDto } from './dto/create.dto';
import { UpdateCustomerProfileDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { CustomerProfile } from './entities';
import {
  OrderCustomerProfileDto,
  QueryCustomerProfileDto,
  SearchCustomerProfileDto,
} from './dto';
import { CustomerProfileService } from './service';

const C = new HttpRouteBuilder({
  singularName: 'customer-profile',
  pluralName: 'customer-profiles',
  entity: CustomerProfile,
});

@C.Controller()
export class CustomerProfileController {
  constructor(private readonly service: CustomerProfileService) {}

  @C.Create()
  async saveOne(@Body() createCustomerProfileDto: CreateCustomerProfileDto) {
    return await this.service.saveOne(createCustomerProfileDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderCustomerProfileDto,
    @Query() query: QueryCustomerProfileDto,
    @Query() search: SearchCustomerProfileDto
  ) {
    return await this.service.findAll(paginator, order, query, search);
  }

  @C.FindOneById()
  async findOneById(@Param('id') id: number) {
    return await this.service.findOneById(id);
  }

  @C.Update()
  async updateOneById(
    @Param('id') id: number,
    @Body() updateCustomerProfileDto: UpdateCustomerProfileDto
  ) {
    return await this.service.updateOneById(id, updateCustomerProfileDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
