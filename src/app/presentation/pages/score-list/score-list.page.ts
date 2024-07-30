import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StudentAttendance, StudentList } from 'src/app/infrastructure/http/student-list';
import { Event } from '@angular/router';
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
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.page.html',
  styleUrls: ['./score-list.page.scss'],
})
export class ScoreListPage implements OnInit {

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

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.groups = [
      { name: 'Primero A', code: '1a' },
      { name: 'Segundo B', code: '2b' },
      { name: 'Tercero A', code: '3a' },
      { name: 'Sexto B', code: '6b' },
      { name: 'Quinto C', code: '5c' }
    ];
    this.students = StudentList;
  }

  onUpload(event: any) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}
