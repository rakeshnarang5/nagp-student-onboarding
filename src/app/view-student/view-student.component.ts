import { StudentService } from './../student.service';
import { Student } from './../models/student.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  @Input() student: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

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
