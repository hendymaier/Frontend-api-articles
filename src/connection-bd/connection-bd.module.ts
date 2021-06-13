import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const host = "localhost";
const port = 27017;
const bd ="bdarticulos" ;

const path = ["mongodb://", host, ":", port, "/", bd].join("");


@Module({

    imports: [MongooseModule.forRoot(path,  { connectionName: 'ConnectionBD' })],
})
export class ConnectionBdModule {}
