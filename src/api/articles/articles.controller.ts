import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { ArticlesService } from "./articles.service";

@Controller('articles')
export class ArticlesController {

    constructor (private articlesservice: ArticlesService){}

  @Get()
  async getarticle() {
    return await this.articlesservice.getarticle();
  }

  @Get(':searchstring')

  async getsearch(@Param('searchstring') searchstring: string) {
 
    return await this.articlesservice.search(searchstring);
  }
 
  @Post("import")
  async importarticle() {
    return await this.articlesservice.importarticle();
  }

  @Delete(':id')

  async delete(@Param('id') id: string){  
  
    console.log(id);
    this.articlesservice.delete(id);
  }

  
 
 
}
