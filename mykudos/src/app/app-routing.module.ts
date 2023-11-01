import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { NominateComponent } from './pages/nominate/nominate/nominate.component';
import { TrailblaizerComponent } from './pages/trailblaizer/trailblaizer/trailblaizer.component';
import { UploadComponent } from './pages/uploadAws/upload/upload.component';

const routes: Routes = [

  {path: 'dashboard', component: DashboardComponent},
  {path: 'nominate', component: NominateComponent},
  {path: 'trailblaizer', component: TrailblaizerComponent},
  {path: 'upload', component: UploadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
