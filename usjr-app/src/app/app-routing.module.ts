// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { ProgramEntryComponent } from './program-entry/program-entry.component';
import { CollegeEntryComponent } from './college-entry/college-entry.component';
import { ProgramListingComponent } from './program-listing/program-listing.component';
import { CollegeListingComponent } from './college-listing/college-listing.component';
import { CollegeEditComponent } from './college-edit/college-edit.component';
import { ProgramEditComponent } from './program-edit/program-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, 
  { path: 'student', component: StudentComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'students/edit/:id', component: StudentEditComponent },
  { path: 'program-entry', component: ProgramEntryComponent },
  { path: 'college-entry', component: CollegeEntryComponent },
  { path: 'program-listing', component: ProgramListingComponent },
  { path: 'college-listing', component: CollegeListingComponent },
  { path: 'college-edit/:id', component: CollegeEditComponent },
  { path: 'program-edit/:id', component:ProgramEditComponent},
  { path: 'student-edit/:id', component: StudentEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
