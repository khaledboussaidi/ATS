import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ThumbnailModule { 
  path:string;
  extension: string;

  constructor(path: string, extension:string){

    this.path=path;
    this.extension=extension;
  }
}
