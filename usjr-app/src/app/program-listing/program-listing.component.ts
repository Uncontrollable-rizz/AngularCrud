// program-listing.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../Model/student';
import { College } from '../Model/college';
import { Program } from '../Model/program';

@Component({
  selector: 'app-program-listing',
  templateUrl: './program-listing.component.html',
  styleUrls: ['./program-listing.component.css']
})
export class ProgramListingComponent {
  programs: Program[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    // Fetch programs when the component is initialized
    this.fetchPrograms();
  }

  fetchPrograms() {
    this.studentService.getPrograms().subscribe(programs => {
      console.log('Programs: ', programs);
      this.programs = programs;
    });
  }

  confirmDelete(programId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this program?');

    if (confirmDelete) {
      this.studentService.deleteProgram(programId).subscribe({
        next: response => {
          console.log('Program Deleted: ', response);
          // Refresh the page to show the updated program list
          this.fetchPrograms();
        },
        error: error => {
          console.error('Error Deleting Program: ', error);
        }
      });
    }
  }

  editProgram(program: Program) {
    
    this.router.navigate(['/program-edit', program.progid]);
  }

  navigateToHome() {
    this.router.navigate(['']);
  }
}
