// program-create.component.ts

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Program } from '../Model/program';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-create',
  templateUrl: './program-entry.component.html',
  styleUrls: ['./program-entry.component.css']
})
export class ProgramEntryComponent implements OnInit {
  programData: Program = {
    progid: null,
    progfullname: '',
    progshortname: '',
    progcollid: null,
    progcolldeptid: null
  };

  constructor(private studentService: StudentService,private router: Router) {}

  ngOnInit(): void {
    
  }

  addProgram() {
    if (this.programData) {
      this.studentService.saveProgram(this.programData).subscribe(
        response => {
          console.log('Student Added',response);
          this.router.navigate(['/program-listing']);
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.warn('Incomplete data for adding a program.');
    }
  }
}
