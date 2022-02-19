import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsStatisticsPage } from './charts-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsStatisticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsStatisticsPageRoutingModule {}
