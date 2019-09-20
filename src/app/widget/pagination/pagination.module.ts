import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { CategoryRoutingModule } from '../../category/category-routing.module';

@NgModule({
  declarations: [ PaginationComponent ],
  exports: [ PaginationComponent ],
  imports: [ CommonModule, CategoryRoutingModule ],
})

export class PaginationModule { }