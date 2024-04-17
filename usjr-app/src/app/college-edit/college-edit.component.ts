import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { College } from '../Model/college';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-college-edit',
  templateUrl: './college-edit.component.html',
  styleUrls: ['./college-edit.component.css']
})
export class CollegeEditComponent {
  collegeId: number;
  college: College = { collid: 0, collfullname: '', collshortname: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Inject the Router service
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.collegeId = +params['id'];
      this.getCollegeDetails();
    });
  }

  getCollegeDetails() {
    this.studentService.getCollegeInfo(this.collegeId).subscribe(
      college => {
        if (college && typeof college === 'object' && !Array.isArray(college)) {
          this.college = college;
        } else {
          console.error('Invalid college response:', college);
        }
      },
      error => {
        console.error('Error fetching college details: ', error);
      }
    );
  }

  updateCollege() {
    this.studentService.updateCollege(this.college).subscribe(
      response => {
        console.log('College Updated: ', response);
        // Navigate to the college list page after successful update
        this.router.navigate(['/college-listing']);
      },
      error => {
        console.error('Error updating college: ', error);
      }
    );
  }
}
