import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../Model/student';
import { College } from '../Model/college';
import { Program } from '../Model/program';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentId: number;
  student: Student = {
    studid: 0,
    studfirstname: '',
    studlastname: '',
    studmidname: '',
    studprogid: 0,
    studcollid: 0,
    studyear: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = +params['id'];
      this.getStudentDetails();
    });
  }

  getStudentDetails() {
    this.studentService.getStudentInfo(this.studentId).subscribe(
      student => {
        if (student && typeof student === 'object' && !Array.isArray(student)) {
          this.student = student;
        } else {
          console.error('Invalid student response:', student);
        }
      },
      error => {
        console.error('Error fetching student details: ', error);
      }
    );
  }

  updateStudent() {
    console.log('Updating student:', this.student);
    this.studentService.updateStudent(this.student).subscribe(
      response => {
        console.log('Student Updated: ', response);
        // Navigate to the student list page after successful update
        this.router.navigate(['/student-list']);
      },
      error => {
        console.error('Error updating student: ', error);
      }
    );
  }



}
