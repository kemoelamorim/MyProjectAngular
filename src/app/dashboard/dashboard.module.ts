import { DashboardRoutingModule } from './dashborad-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { HeaderComponent } from './components/template/header/header.component';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';



@NgModule({
  declarations: [
    HeaderComponent,
    WrapperComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    CardsComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    NgxMaskModule.forChild(),
    FormsModule

  ]
})
export class DashboardModule { }
