import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchViewComponent } from './search-view/search-view.component';
import { QaSuiteService } from '../service/suite.service';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { AngularDropdownModule } from 'angular-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchViewComponent,
    LeftMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[QaSuiteService]
})
export class SearchModule { }
