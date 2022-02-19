import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartsStatisticsPageRoutingModule } from './charts-statistics-routing.module';

import { ChartsStatisticsPage } from './charts-statistics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsStatisticsPageRoutingModule
  ],
  declarations: [ChartsStatisticsPage]
})
export class ChartsStatisticsPageModule {}
