import { Component, OnInit } from '@angular/core';
import { ResponseStudentsNEE, StudentsNEE } from 'src/app/shared/interfaces/studentsNEE.interfaces';
import { StudentsNEEService } from 'src/app/shared/services/studentsNEE/students-nee.service';

@Component({
  selector: 'app-students-nee',
  templateUrl: './students-nee.component.html',
  styleUrls: ['./students-nee.component.css']
})
export class StudentsNEEComponent implements OnInit {

  students: StudentsNEE[]= [];

  studentNEESelected: StudentsNEE | undefined;

  constructor(private studentsNEEService: StudentsNEEService){}

  ngOnInit(): void {
    this.studentsNEEService.getStudentsNEE().subscribe(
      (data: ResponseStudentsNEE) => {
        this.students = data.data
        console.log(data)
      }
    )
  }

  onChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    const studentSelectedById = this.students.find(student => student.idestudiante === Number(element.value));
    this.studentNEESelected = studentSelectedById;
  }

}
