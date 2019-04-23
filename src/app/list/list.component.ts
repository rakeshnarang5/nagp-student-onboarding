import { Student } from './../models/student.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allStudents: Student[] = [];
  category = 'All';
  studentTypes: StudentType[] = [
    { value: 'domestic', viewValue: 'Domestic Student' },
    { value: 'international', viewValue: 'International Student' },
    { value: 'all', viewValue: 'All' }
  ];
  searchKey: string;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.loadStudents();
    this.allStudents = this.studentService.getAllStudents();
  }

  handleEvent(event) {
    console.log(event);
    this.allStudents = this.studentService.getAllStudents();
  }

  update() {
    console.log('update');
    this.allStudents = this.studentService.getStudentsByNameAndCategory(this.searchKey, this.category);
  }

}
