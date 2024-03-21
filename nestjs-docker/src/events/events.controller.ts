import { Body, Controller, UploadedFile, Get, Param, Post, Put, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { EventsService } from './events.service'
import { Events } from './shemas/events.shemas';
import { createEventDto } from './dto/create-events.dto';
import { updateEventDto } from './dto/update-dto.events';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) {

    }
    @Get()
    async getAllEvents(): Promise<Events[]> {
        return this.eventsService.findAll()
    }
    @Post()
    async createEvent(
        @Body()
        event: createEventDto,
    ): Promise<Events> {
        return this.eventsService.create(event)
    }
    @Post('event')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: 'public/img',
                filename: (req, file, cb) => {
                    cb(null, file.originalname);
                },
            }),
        }),
    )
    async event(@UploadedFile() file: Express.Multer.File) {
        console.log(file)
        return file
    }

    @Get(':id')
    async getEvents(
        @Param('id')
        id: string
    ): Promise<Events> {
        return this.eventsService.findById(id)
    }
    @Put(':id')
    async updateEvent(
        @Param('id')
        id: string,
        @Body()
        event: updateEventDto,
    ): Promise<Events> {
        return this.eventsService.updateById(id, event)
    }
    @Delete(':id')
    async deleteEvents(
        @Param('id')
        id: string
    ): Promise<Events> {
        return this.eventsService.deleteById(id)
    }

}
