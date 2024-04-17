// student-list.component.ts

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../Model/student';
import { College } from '../Model/college';
import { Program } from '../Model/program';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  colleges: College[] = [];
  programs: Program[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    // Fetch students, colleges, and programs when the component is initialized
    this.fetchStudents();
    this.fetchColleges();
    this.fetchPrograms();
  }

  fetchStudents() {
    this.studentService.getStudents().subscribe(students => {
      console.log('Students: ', students);
      this.students = students;
    });
  }

  fetchColleges() {
    this.studentService.getColleges().subscribe(colleges => {
      console.log('Colleges: ', colleges);
      this.colleges = colleges;
    });
  }

  fetchPrograms() {
    this.studentService.getPrograms().subscribe(programs => {
      console.log('Programs: ', programs);
      this.programs = programs;
    });
  }

  getCollegeName(collid: number): string {
    const college = this.colleges.find(college => college.collid === collid);
    return college ? college.collfullname : '';
  }

  getProgramName(progid: number): string {
    const program = this.programs.find(program => program.progid === progid);
    return program ? program.progfullname : '';
  }

  confirmDelete(studentId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this student?');

    if (confirmDelete) {
      this.deleteStudent(studentId);
    }
  }

  deleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId).subscribe({
      next: response => {
        console.log('Student Deleted: ', response);
        // Refresh the page to show the updated student list
        this.fetchStudents();
      },
      error: error => {
        console.error('Error Deleting Student: ', error);
      }
    });
  }

  editStudent(student: Student) {
    console.log('Editing student ID:', student.studid); // Check if this prints the correct ID
    this.router.navigate(['/student-edit', student.studid]);
  }
  
  navigateToHome() {
    this.router.navigate(['']);
  }
}