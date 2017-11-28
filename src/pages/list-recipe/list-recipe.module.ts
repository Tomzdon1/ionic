import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListRecipePage } from './list-recipe';

@NgModule({
  declarations: [
    ListRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(ListRecipePage),
  ],
})
export class ListRecipePageModule {}
