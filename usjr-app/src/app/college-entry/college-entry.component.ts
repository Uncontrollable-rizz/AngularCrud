// college-entry.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../Model/student';
import { College } from '../Model/college';
import { Program } from '../Model/program';

@Component({
  selector: 'app-college-entry',
  templateUrl: './college-entry.component.html',
  styleUrls: ['./college-entry.component.css']
})
export class CollegeEntryComponent {

  collegeData: College = {
    collid: null,  
    collfullname: '',
    collshortname: ''
  };

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    // Fetch colleges for any dropdown or related functionality
  }

  addCollege() {
    if (this.collegeData) {
      this.studentService.saveCollege(this.collegeData).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/college-listing']);
        },
        error => {
          console.error(error);
          // Optionally, you can show an error message to the user
        }
      );
    } else {
      console.warn('Incomplete data for adding a college.');
      // Optionally, you can show a warning to the user that the form is incomplete
    }
  }
}
