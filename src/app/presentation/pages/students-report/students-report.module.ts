import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentsReportPageRoutingModule } from './students-report-routing.module';
import { StudentsReportPage } from './students-report.page';
import { ChartModule } from 'primeng/chart';
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
import { InputNumberModule } from 'primeng/inputnumber';


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
    ChartModule,
    StudentsReportPageRoutingModule
  ],
  declarations: [StudentsReportPage]
})
export class StudentsReportPageModule {}
