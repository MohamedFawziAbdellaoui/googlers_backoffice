import { Events } from './shemas/events.shemas';
import mongoose from 'mongoose';
export declare class EventsService {
    private eventModel;
    constructor(eventModel: mongoose.Model<Events>);
    findAll(): Promise<Events[]>;
    create(event: Events): Promise<Events>;
    findById(id: string): Promise<Events>;
    updateById(id: string, event: Events): Promise<Events>;
    deleteById(id: string): Promise<Events>;
}
