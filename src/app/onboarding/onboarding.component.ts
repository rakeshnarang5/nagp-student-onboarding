import { Student } from './../models/student.model';
import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})

export class OnboardingComponent implements OnInit {

  studentTypes: StudentType[] = [
    { value: 'domestic', viewValue: 'Domestic Student' },
    { value: 'international', viewValue: 'International Student' }
  ];

  currentUser: string;
  @Input() student: Student;
  @Input() isDisabled: boolean;

  constructor(private studentService: StudentService, private toastr: ToastrService) {
    //  this.student = new Student();
    if (!this.student) {
      this.student = new Student();
    }
    this.studentService.loadStudents();
  }

  ngOnInit() {
    console.log(this.isDisabled);
    this.currentUser = sessionStorage.getItem('currentUser');
  }

  onboard() {
    let errorMessages = this.validateInput(this.student);
    if (errorMessages.length > 1) {
      for (let i = 0; i < errorMessages.length; i++) {
        this.toastr.error(errorMessages[i]);
      }
      return;
    }
    this.studentService.createOrEditStudent(this.student);

    // console.log(this.student);
    // this.allStudents.push(this.student);
    this.student = new Student();
    this.toastr.success('Student onboarded successfully!');
  }

  validateInput(student) {
    let errorMessages = [];

    if (!student.studentName) {
      errorMessages.push('Student name blank.');
    }
    if (!student.category) {
      errorMessages.push('Student category blank.');
    }
    if (!student.domicile) {
      errorMessages.push('Student domicile blank.');
    }
    if (!student.birthCertificate) {
      errorMessages.push('Student birthCertificate blank.');
    }
    if (!student.marksheets) {
      errorMessages.push('Student marksheets blank.');
    }
    if (!student.policeClearance && student.category === 'International Student') {
      errorMessages.push('Student policeClearance blank.');
    }
    if (!student.passport && student.category === 'International Student') {
      errorMessages.push('Student passport blank.');
    }
    if (!student.declaration) {
      errorMessages.push('Student declaration blank.');
    }
    if (!student.lastClassScore) {
      errorMessages.push('Student lastClassScore blank.');
    }
    if (!student.motherName) {
      errorMessages.push('Student mother\'s name blank.');
    }
    if (!student.dob) {
      errorMessages.push('Student date of birth blank.');
    }
    if (!student.fatherName) {
      errorMessages.push('Student father\'s name blank.');
    }
    if (student.lastClassScore < 0 || student.lastClassScore > 100) {
      errorMessages.push('Student\'s last score marks invalid.');
    }

    return errorMessages;
  }

  checkAll() {
    this.student.domicile = !this.student.domicile;
    this.student.declaration = !this.student.declaration;
    this.student.passport = !this.student.passport;
    this.student.policeClearance = !this.student.policeClearance;
    this.student.birthCertificate = !this.student.birthCertificate;
    this.student.marksheets = !this.student.marksheets;
  }

}
