import { NgModule } from '@angular/core';
import { CategoryMenuModule } from '../../widget/category-menu/category.menu.module';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [ 
    CategoryMenuModule
  ],
})

export class ListModule { }