import { Student } from './../models/student.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() student: Student;
  @Output() clickEvent = new EventEmitter();

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    console.log(this.student);
  }

  delete() {
    if (confirm('Are you sure you want to delete: ' + this.student.studentName)) {
      this.studentService.deleteStudentById(this.student.id);
      this.clickEvent.emit('deleted');
    }
  }

}
