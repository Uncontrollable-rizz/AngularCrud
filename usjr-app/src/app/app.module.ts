import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student-add/student-add.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { CollegeEntryComponent } from './college-entry/college-entry.component';
import { CollegeListingComponent } from './college-listing/college-listing.component';
import { CollegeEditComponent } from './college-edit/college-edit.component';
import { ProgramEntryComponent } from './program-entry/program-entry.component';
import { ProgramEditComponent } from './program-edit/program-edit.component';
import { ProgramListingComponent } from './program-listing/program-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    HomeComponent,
    StudentEditComponent,
    CollegeEntryComponent,
    CollegeListingComponent,
    CollegeEditComponent,
    ProgramEntryComponent,
    ProgramEditComponent,
    ProgramListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
