import { NgModule } from '@angular/core';
import { CategoryMenuModule } from '../../widget/category-menu/category.menu.module';
import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListComponent],
  imports: [ 
    CommonModule,
    CategoryMenuModule
  ],
})

export class ListModule { }