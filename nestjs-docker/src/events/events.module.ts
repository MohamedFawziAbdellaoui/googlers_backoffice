import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Events, event } from './shemas/events.shemas';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports : [MongooseModule.forFeature([{name:Events.name, schema:event}]),
MulterModule.register({
  dest:'./files',
})



],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
