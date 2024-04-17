import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './Model/student';
import { Program } from './Model/program';
import { College } from './Model/college';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseURL: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  // CRUD Operations
  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseURL}students/`);
  }

  public saveStudentInfo(student: Student): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseURL}students/`, student, { headers });
  }

  public updateStudent(student: Student): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseURL}students/${student.studid}/`, student, { headers });
  }

  public deleteStudent(studentId: number): Observable<any> {
    return this.http.delete(`${this.baseURL}students/${studentId}/`);
  }

  public getColleges(): Observable<College[]> {
    return this.http.get<College[]>(`${this.baseURL}colleges/`);
  }

  public getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(`${this.baseURL}programs/`);
  }

  public getStudentInfo(studid: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseURL}students/${studid}/`);
  }

  public getCollegeInfo(collid: number): Observable<College> {
    return this.http.get<College>(`${this.baseURL}colleges/${collid}/`);
  }

  public saveProgram(program: Program): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseURL}programs/`, program, { headers });
  }

  public deleteProgram(programId: number): Observable<any> {
    return this.http.delete(`${this.baseURL}programs/${programId}/`);
  }

  public getProgramInfo(progid: number): Observable<Program> {
    return this.http.get<Program>(`${this.baseURL}programs/${progid}/`);
  }

  public updateProgram(program: Program): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseURL}programs/${program.progid}/`, program, { headers });
  }

  public saveCollege(college: College): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseURL}colleges/`, college, { headers });
  }

  public updateCollege(college: College): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseURL}colleges/${college.collid}/`, college, { headers });
  }

  public deleteCollege(collegeId: number): Observable<any> {
    return this.http.delete(`${this.baseURL}colleges/${collegeId}/`);
  }
}
