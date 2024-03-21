import { Schema , Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true }) 


export class Events {
    @Prop()
    id:string
    @Prop()
    name:string;
    @Prop()
    images:string;
    @Prop()
    club_id:string;
    @Prop()
    facebookPostUrl:string;
    @Prop()
    instagramPostlink:string;
    @Prop()
    linkedinPostlink:string;
}
export const event = SchemaFactory.createForClass(Events)