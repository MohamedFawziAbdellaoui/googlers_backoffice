/// <reference types="multer" />
import { EventsService } from './events.service';
import { Events } from './shemas/events.shemas';
import { createEventDto } from './dto/create-events.dto';
import { updateEventDto } from './dto/update-dto.events';
export declare class EventsController {
    private eventsService;
    constructor(eventsService: EventsService);
    getAllEvents(): Promise<Events[]>;
    createEvent(event: createEventDto): Promise<Events>;
    event(file: Express.Multer.File): Promise<Express.Multer.File>;
    getEvents(id: string): Promise<Events>;
    updateEvent(id: string, event: updateEventDto): Promise<Events>;
    deleteEvents(id: string): Promise<Events>;
}
