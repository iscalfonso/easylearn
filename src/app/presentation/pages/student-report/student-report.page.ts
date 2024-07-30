import { Component, OnInit } from '@angular/core';
import { StudentAttendance, StudentList } from 'src/app/infrastructure/http/student-list';

interface Group {
  name: string;
  code: string;
}
interface Subject {
  name: string;
  code: string;
}
interface Homework {
  id: number,
  groupCode: string,
  subjectCode: string,
  name: string
}
interface StudentHomework {
  id: number,
  studentId: number,
  homeworkId: number,
  fileUrl: string,
  score: number
}
@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.page.html',
  styleUrls: ['./student-report.page.scss'],
})
export class StudentReportPage implements OnInit {

  basicData: any;
  basicOptions: any;
  data: any;
  options: any;
  groups: Group[] | undefined;
  subjects: Array<Subject> | undefined = [
    { name: 'Matemáticas 1', code: 'MA01' },
    { name: 'Español 1', code: 'ES01' },
    { name: 'Educación cívica', code: 'EC01' },
    { name: 'Historia 1', code: 'HU01' },
  ];
  selectedGroup: Group | undefined;
  selectedSubject: Subject | undefined;
  selectedDate: string | undefined;
  students: Array<StudentAttendance> | undefined;

  scores = [
    { studentId: 2, homeworkName: 'Investigación de números primos', score: 7.5 },
    { studentId: 2, homeworkName: 'Sumas y restas', score: 5 },
    { studentId: 2, homeworkName: 'Investigación de triangulos rectangulos', score: 8 },
    { studentId: 2, homeworkName: 'Avance de presentación grupal de proyecto', score: 10 },
  ]

  constructor() {}

  ngOnInit() {
    this.bars();
    this.pie();
    this.groups = [
      { name: 'Primero A', code: '1a' },
      { name: 'Segundo B', code: '2b' },
      { name: 'Tercero A', code: '3a' },
      { name: 'Sexto B', code: '6b' },
      { name: 'Quinto C', code: '5c' }
    ];
    this.students = StudentList;
  }

  bars(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: this.scores.map(e=> {
        return e.homeworkName;
      }),
      datasets: [
        {
          label: 'Calificaciones x tarea',
          data: [8, 4, 9.5, 6],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
          ],
          borderWidth: 1,
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  pie() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Asistencia', 'Faltas'],
      datasets: [
        {
          data: [95, 5],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }

}
