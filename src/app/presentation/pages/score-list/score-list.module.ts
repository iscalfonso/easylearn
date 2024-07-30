import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ScoreListPageRoutingModule } from './score-list-routing.module';
import { ScoreListPage } from './score-list.page';
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
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';


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
    InputNumberModule,
    FileUploadModule,
    ToastModule,
    HttpClientModule,
    ScoreListPageRoutingModule
  ],
  declarations: [ScoreListPage],
  providers: [MessageService]
})
export class ScoreListPageModule {}
