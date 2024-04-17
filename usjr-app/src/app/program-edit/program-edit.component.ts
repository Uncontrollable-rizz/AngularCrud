import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Program } from '../Model/program';

@Component({
  selector: 'app-program-edit',
  templateUrl: './program-edit.component.html',
  styleUrls: ['./program-edit.component.css']
})
export class ProgramEditComponent {
  programId: number;
  program: Program = { progid: 0, progfullname: '', progshortname: '', progcollid: 0, progcolldeptid: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.programId = +params['id'];
      this.getProgramDetails();
    });
  }

  getProgramDetails() {
    this.studentService.getProgramInfo(this.programId).subscribe(
      program => {
        if (program && typeof program === 'object' && !Array.isArray(program)) {
          this.program = program;
        } else {
          console.error('Invalid program response:', program);
        }
      },
      error => {
        console.error('Error fetching program details: ', error);
      }
    );
  }

  updateProgram() {
    this.studentService.updateProgram(this.program).subscribe(
      response => {
        console.log('Program Updated: ', response);
        // Navigate to the program list page after successful update
        this.router.navigate(['/program-listing']);
      },
      error => {
        console.error('Error updating program: ', error);
      }
    );
  }
}
