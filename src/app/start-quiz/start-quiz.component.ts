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
  notFound = false;
  loadingQuiz = false;

  ngOnInit() {
    if(this.quizID !== null) {
      this.getQuiz();
    }
  }

  getQuiz(): void {
    // checking for existing quiz
    this.loadingQuiz = true;
    setTimeout(() => {
      if(this.quizID === 'yes') {
        this.router.navigate(['/doquiz']);
      } else {
        this.notFound = true;
      }
      this.loadingQuiz = false;
    }, 3000);
    
  }

  findQuiz(tryQuiz: string) {
    this.quizID = tryQuiz;
    return this.getQuiz();
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
