import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding-parent',
  templateUrl: './onboarding-parent.component.html',
  styleUrls: ['./onboarding-parent.component.css']
})
export class OnboardingParentComponent implements OnInit {

  currentUser: string;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.currentUser = sessionStorage.getItem('currentUser');
    this.studentService.loadStudents();
  }

}
