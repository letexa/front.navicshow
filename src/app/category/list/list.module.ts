import { NgModule } from '@angular/core';
import { CategoryMenuModule } from '../../widget/category-menu/category.menu.module';
import { PaginationModule } from '../../widget/pagination/pagination.module';
import { ListComponent } from './list.component';
import { CategoryRoutingModule } from "../category-routing.module";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListComponent],
  imports: [ 
    CommonModule,
    CategoryMenuModule,
    PaginationModule,
    CategoryRoutingModule
  ],
})

export class ListModule { }