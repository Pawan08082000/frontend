import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    LayoutModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,MatCardModule,
  ],
  exports:[HeaderComponent, FooterComponent ],
  providers:[HttpClientModule]

})
export class GlobalModule { }
