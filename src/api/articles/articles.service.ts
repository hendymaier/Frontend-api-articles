import { Injectable, HttpService, OnApplicationBootstrap} from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { map } from "rxjs/operators";
import { AxiosResponse } from 'axios'

import { IArticles } from "../../interface/articles.interface";

import { Cron, CronExpression } from "@nestjs/schedule";

@Injectable()
export class ArticlesService implements OnApplicationBootstrap {

    constructor(
        @InjectModel("Articles") private imodel: Model<IArticles>,
        private readonly  http: HttpService
      ) {}

    onApplicationBootstrap() {
        this.importarticle();
      }
      

      async getarticle(): Promise<IArticles[]> {
      return await this.imodel.find().sort('-objectID').exec();
      }

     
    @Cron(CronExpression.EVERY_HOUR)



    async delete(id: string)
    {
     
      return this.imodel.findByIdAndDelete({_id:id}).exec();
    }



    async importarticle() {

    console.log("obteniendo articulos");

    var jsonarticles=[];
      
    try{
      jsonarticles = await this.http
      .get(
        'https://hn.algolia.com/api/v1/search_by_date?query=nodejs'
      )
      .pipe(map((res) => res.data.hits /*cambiar por hits */))
      .toPromise();
    }
    catch(err) { console.log(err)}; 

    

    for (let index = 0; index < jsonarticles.length; index++) {
      const j = { ext_id: jsonarticles[index].objectID/*cambiar por el id verdadero*/};



      let newarticle = await this.imodel.findOne(j);

      console.log(newarticle);


      if (!newarticle) {
        const { title, story_title, author, created_at: date, url, objectID: ext_id } = jsonarticles[index];
              

        await this.imodel.create(<IArticles>{ title, story_title, author, date, ext_id, hidden: false, url });
      }
    }
    //elseretornar mensaje
    
    return jsonarticles;
   

  }
//search
async search(searchString: string)
    {
       
    return  this.imodel.find({"$or":[
        {"title": { "$regex": searchString, "$options": "i" }},
        {"story_title":{ "$regex": searchString, "$options": "i" }},
        {"author":{ "$regex": searchString, "$options": "i" }}
       
        
       ]})
       .sort([['created_at','descending']])
       .exec();
}


}