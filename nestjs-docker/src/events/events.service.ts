import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Events } from './shemas/events.shemas';
import mongoose from 'mongoose';
@Injectable()
export class EventsService {
    constructor(
        @InjectModel(Events.name)
        private eventModel:mongoose.Model<Events>

    ){

    }
    async findAll():Promise<Events[]>{
        const events = await this.eventModel.find();
        return events;
    }
    async create(event:Events):Promise<Events>{
        const res =await this.eventModel.create(event)
        return res
    }
    async findById(id:string):Promise<Events>{
        const event =await this.eventModel.findById(id)
       if(!event){
        throw new NotFoundException('event not found ')
       }
       
        return event;
    }
    async updateById(id:string , event:Events):Promise<Events>{
        return await this.eventModel.findByIdAndUpdate(id, event , {
            new : true,
            runValidators:true
        })
       
    }
    async deleteById(id:string ):Promise<Events>{
        return await this.eventModel.findByIdAndDelete(id)
        }
       
    }

