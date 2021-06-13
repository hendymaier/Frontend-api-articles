import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IArticles } from "../interface/articles.interface";

@Schema({ timestamps: true })
export class Article {
  @Prop({ type: String})
  title: string;

  @Prop({ type: String })
  author: string;

  @Prop({ type: Date })
  date: Date;

  @Prop({ type: String })
  url: string;

  @Prop({ type: String })
  ext_id: string;

  @Prop({ type: Boolean })
  hidden: boolean;

}

export const ArticleSchemaModule = SchemaFactory.createForClass(Article);




//Creación de un DTOque representa a las propiedades de un libro que se especifican y se envían cuando se realiza una petición para crear un libro. Hablamos de los datos que van en la petición y no tienen por que tener una correspondencia directa con un objeto completo del dominio. Incluso pueden contener propiedades de varios objetos del dominio. Como su nombre indica


export class FeedFake {
  public async create(): Promise<any>{}
  public async save(): Promise<void> {}
  public async findByIdAndDelete(): Promise<any>{}
  public async deleteMany(): Promise<void>{}
  public async findOne(): Promise<void> {}
  public async findById(): Promise<void> {}

}