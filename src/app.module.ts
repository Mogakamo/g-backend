import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EgarageModule } from './egarage/egarage.module';

@Module({
  imports: [EgarageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
