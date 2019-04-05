import { NgModule } from '@angular/core';
import { MenuModule } from '../widget/main-menu/menu.module';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    MenuModule,
  ],
})

export class IndexModule { }