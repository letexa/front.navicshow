import { NgModule } from "@angular/core";
import { CategoryRoutingModule } from "./category-routing.module";
import { ListModule } from "./list/list.module";
import { EditModule } from "./edit/edit.module";

@NgModule({
  imports: [
    CategoryRoutingModule,
    ListModule,
    EditModule
  ],
})

export class CategoryModule { }