import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { Course } from '../Course';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  constructor(private courseService:CourseService, private router:Router) { }

  @ViewChild("formValue", {static:false}) templateform;

  displayCourseName(courseName){
    console.log(courseName)
  }

  handleSubmit({value}){
    const course = new Course();
    course.id = Math.ceil(Math.random() * 100);
    course.desc= value.courseDesc;
    course.name= value.courseName;
    course.offer = value.offer;
    course.price = value.coursePrice;
    course.students = 0;
    course.rating = 0;
    this.courseService.addCourse(course).subscribe(data => console.log(data));;
    this.router.navigate(['courses'])
  }
}
