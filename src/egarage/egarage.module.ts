import { Module } from '@nestjs/common';
import { EgarageController } from './egarage.controller';
import { EgarageService } from './egarage.service';

@Module({
  controllers: [EgarageController],
  providers: [EgarageService]
})
export class EgarageModule {}
