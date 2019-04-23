import { Injectable } from '@angular/core';
import { Student } from './models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  allStudents: Student[] = [];

  getStudentsByNameAndCategory(name: string, category: string) {
    console.log('name' + name);
    console.log('category' + category);
    if (name && category) {
      if ('All' === category) {
        return this.allStudents.filter(p => p.studentName.toLowerCase().includes(name));
      } else {
        return this.allStudents.filter(p => p.studentName.toLowerCase().includes(name) && p.category === category);
      }
    } else if (name) {
      return this.allStudents.filter(p => p.studentName.toLowerCase().includes(name));
    } else if (category) {
      if ('All' === category) {
        return this.allStudents;
      } else {
        return this.allStudents.filter(p => p.category === category);
      }
    } else {
      return this.allStudents;
    }
  }

  deleteStudentById(id: number) {
    this.allStudents = this.allStudents.filter(p => id !== p.id);
    this.persistStudent();
  }

  getAllStudents() {
    return this.allStudents;
  }

  createOrEditStudent(student: Student) {
    if (student.id) {
      this.deleteStudentById(student.id);
    } else {
      student.id = this.findNextId();
    }
    this.allStudents.push(student);
    this.persistStudent();
  }

  getStudentById(id: number) {
    return this.allStudents.filter(p => id == p.id)[0];
  }

  findNextId() {
    let maxId = 1;
    for (let i = 0; i < this.allStudents.length; i++) {
      if (this.allStudents[i].id >= maxId) {
        maxId = this.allStudents[i].id + 1;
      }
    }
    return maxId;
  }

  persistStudent() {
    localStorage.setItem('allStudents', JSON.stringify(this.allStudents));
  }

  loadStudents() {
    let students = JSON.parse(localStorage.getItem('allStudents'));
    if (students) {
      this.allStudents = students;
    }
  }

}
