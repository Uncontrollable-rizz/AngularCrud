// college-listing.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../Model/student';
import { College } from '../Model/college';
import { Program } from '../Model/program';


@Component({
  selector: 'app-college-listing',
  templateUrl: './college-listing.component.html',
  styleUrls: ['./college-listing.component.css']
})
export class CollegeListingComponent {
  colleges: College[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.fetchColleges();
  }

  fetchColleges() {
    this.studentService.getColleges().subscribe(
      colleges => {
        console.log('Colleges: ', colleges);
        this.colleges = colleges;
      },
      error => {
        console.error('Error fetching colleges: ', error);
      }
    );
  }

  confirmDelete(collegeId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this college?');

    if (confirmDelete) {
      this.deleteCollege(collegeId);
    }
  }

  deleteCollege(collegeId: number) {
    this.studentService.deleteCollege(collegeId).subscribe(
      response => {
        console.log('College Deleted: ', response);
        // Refresh the page to show the updated college list
        this.fetchColleges();
      },
      error => {
        console.error('Error Deleting College: ', error);
      }
    );
  }
  navigateToHome() {
    this.router.navigate(['']);
  }
  editCollege(college: College) {

    this.router.navigate(['/college-edit', college.collid]);
    console.log('Edit College: ', college);
  }
}
