import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentListPageRoutingModule } from './student-list-routing.module';
import { StudentListPage } from './student-list.page';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxModule,
    PanelModule,
    DropdownModule,
    FloatLabelModule,
    DividerModule,
    CardModule,
    ButtonModule,
    DataViewModule,
    TabViewModule,
    CalendarModule,
    StudentListPageRoutingModule
  ],
  declarations: [StudentListPage]
})
export class StudentListPageModule {}
