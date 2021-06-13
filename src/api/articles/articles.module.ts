import { HttpModule,Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { ArticleSchemaModule } from "../../schema/articles.schema";

import { MongooseModule } from "@nestjs/mongoose";


@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature(
      [{ name: "Articles", schema: ArticleSchemaModule, collection: "articles" }],
      "ConnectionBD"
    ),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService]
})
export class ArticlesModule {}
