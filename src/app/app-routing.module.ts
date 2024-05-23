import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

// Le tableau principal de toutes les routes de notre application
const routes: Routes = [
  { path: 'faceSnaps/:id', component:SingleFaceSnapComponent},
  { path: 'faceSnaps', component: FaceSnapListComponent},
  { path: '', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// {
//   path: 'tasks',
//   component: TasksDashboardComponent,
//   canActivate: [AuthGuard],
//   children: [
//     { path: '', redirectTo: 'list', pathMatch: 'full' },
//     { path: 'list', component: TaskListComponent },
//     { path: 'detail/:id', component: TaskDetailComponent }
//   ]
// },
// // Wildcard Route for a 404 page
// { path: '**', redirectTo: '/tasks' }