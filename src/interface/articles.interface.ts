import { Document } from "mongoose";
export interface IArticles extends Document{
 id: string;

  title: string;

  story_title: string;

  author: string;

  date: string;

  url: string;

  ext_id: string

  hidden?: boolean;
}
