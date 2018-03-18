import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AsyncLocalStorage } from 'angular-async-local-storage';

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
    private router: Router,
    private quizService: QuizService,
    protected localStorage: AsyncLocalStorage,
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

    this.quizService.getQuiz(this.quizID)
      .subscribe(quiz => {
        if (quiz) {
          this.localStorage.setItem('quiz', { id: quiz.id }).subscribe(() => {});
          this.router.navigate(['/doquiz']);
        } else {
          this.notFound = true;
        }
      }, error => {
        this.notFound = true;
      }, () => {
        this.loadingQuiz = false;
      });
  }

  findQuiz(tryQuiz: string) {
    this.quizID = tryQuiz;
    this.router.navigate([tryQuiz]);
    return this.getQuiz();
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
