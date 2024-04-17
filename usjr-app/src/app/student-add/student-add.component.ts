// student-add.component.ts

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../Model/student';
import { College } from '../Model/college';
import { Program } from '../Model/program';

@Component({
  selector: 'app-student',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentComponent implements OnInit {
  studentData: Student = {
    studid: null,
    studfirstname: '',
    studlastname: '',
    studmidname: '',
    studprogid: 0,
    studcollid: 0,
    studyear: null
  };

  colleges: College[] = [];
  programs: Program[] = [];

  // Properties for selected college and program
  selectedCollegeId: number;
  selectedProgramId: number;

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    
    this.fetchColleges();
    this.fetchPrograms();
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

  // Function to filter programs based on selected college
  filterPrograms() {
    if (this.selectedCollegeId) {
      return this.programs.filter(program => program.progcollid === this.selectedCollegeId);
    } else {
      return this.programs;
    }
  }

  addStudent() {
    console.log('Selected College: ', this.selectedCollegeId);
    console.log('Selected Program: ', this.selectedProgramId);
    console.log('Student Data Before Sending: ', this.studentData);
  
    if (this.selectedCollegeId && this.selectedProgramId) {
      // Convert IDs to numbers
      this.studentData.studcollid = +this.selectedCollegeId;
      this.studentData.studprogid = +this.selectedProgramId;
  
      // Assuming studid is supposed to be a number, if so, convert it as well
      this.studentData.studid = +this.studentData.studid;
  
      this.studentService.saveStudentInfo(this.studentData).subscribe({
        next: response => {
          console.log('Student Added: ', response);
          this.router.navigate(['/student-list']);
        },
        error: error => {
          console.error('Error Adding Student: ', error);
        }
      });
    } else {
      console.error('Please select both college and program.');
    }
  }
}
