import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: QuizService,
    private location: Location,
    private router: Router
  ) { }

  quizID = this.route.snapshot.paramMap.get('quizId');

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz(): void {

    if(this.quizID === 'yes') {
      this.router.navigate(['/doquiz']);
    }
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
