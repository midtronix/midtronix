import { Module, OnModuleInit } from '@nestjs/common';
import { SessionController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './entities';
import { Repository } from 'typeorm';
import { SessionService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Session])],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule implements OnModuleInit {
  constructor(
    @InjectRepository(Session) protected readonly repo: Repository<Session>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
