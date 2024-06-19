import { Module, OnModuleInit } from '@nestjs/common';
import { ProjectController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities';
import { Repository } from 'typeorm';
import { ProjectService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule implements OnModuleInit {
  constructor(
    @InjectRepository(Project) protected readonly repo: Repository<Project>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
