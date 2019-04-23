import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  student: Student;

  ngOnInit() {
    let id: number;
    this.route.params.subscribe(params => {
      id = params.id;
    });
    console.log("id is" + id);
    this.student = this.studentService.getStudentById(id);
    console.log("student is");
    console.log(this.student);
  }

}
