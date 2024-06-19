import { Body, Param, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create.dto';
import { UpdateProfileDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { Profile } from './entities';
import { OrderProfileDto, QueryProfileDto, SearchProfileDto } from './dto';
import { ProfileService } from './service';

const C = new HttpRouteBuilder({
  singularName: 'profile',
  pluralName: 'profiles',
  entity: Profile,
});

@C.Controller()
export class ProfileController {
  constructor(private readonly service: ProfileService) {}

  @C.Create()
  async saveOne(@Body() createProfileDto: CreateProfileDto) {
    return await this.service.saveOne(createProfileDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderProfileDto,
    @Query() query: QueryProfileDto,
    @Query() search: SearchProfileDto
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
    @Body() updateProfileDto: UpdateProfileDto
  ) {
    return await this.service.updateOneById(id, updateProfileDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
