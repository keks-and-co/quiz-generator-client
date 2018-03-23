import { catchError } from 'rxjs/operators';
import { Question } from './../data/question';
import { Quiz } from './../data/quiz';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AsyncLocalStorage } from 'angular-async-local-storage';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Answer } from '../data/answer';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz = <Quiz>{};
  renderQuestions = false;
  isLinear = false;
  resolvedCaptcha = false;
  formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private quizService: QuizService,
    private _formBuilder: FormBuilder,
    protected localStorage: AsyncLocalStorage
  ) { }

  getQuiz(): Promise<{}> {
    let promise = new Promise((resolve, reject) => {
      this.localStorage.getItem('quiz')
      .subscribe((quizy) => {
        if(!quizy) {
          reject('not found');
        } else {
          this.quizService.getQuiz(quizy.id)
          .subscribe(quiz => {
            this.quiz = quiz;
            resolve();
          }, error => {
            reject('not found');
          });
        }
      });
    });
    return promise;
  }

  ngOnInit() {

    this.getQuiz().then(() => {
      let storageQuestions = {};
      this.localStorage.getItem('questions').subscribe((questions) => {
        let storageQuestions = questions;
        this._prepareFormGroup(storageQuestions);
        this._subcribeToFormChanges();
        this.renderQuestions = true;
      });
    }).catch(() => {
      this.router.navigate(['/']);
    });

    this.formGroup = this._formBuilder.group({});
  }

  _subcribeToFormChanges() {
    const myFormValueChanges$ = this.formGroup.valueChanges;

    myFormValueChanges$.subscribe(x => {
      console.log(this.formGroup.value);
      this.localStorage.setItem('questions', this.formGroup.value).subscribe(() => {
      });
    });
  }

  _prepareFormGroup(storageQuestions) {
    storageQuestions = storageQuestions || {};
    let questions = {};
    this.quiz.questions.forEach((block: Question[]) => {
      block.map((question) => {
        questions[question.id] = [storageQuestions[question.id] || '', [<any>Validators.required]];
      });
    });
    this.formGroup = this._formBuilder.group(questions);
  }

  selectedAnswer: Answer;

  onSelect(answer1: Answer): void {
    this.selectedAnswer = answer1;
  }

  resolved(captchaResponse: string) {
    this.resolvedCaptcha = (captchaResponse === null) ? false : true;
  }

  onSubmit() {
    if (this.formGroup.valid && this.resolvedCaptcha) {
      console.log(this.formGroup.value);
      this.formGroup.reset;
      this.localStorage.clear().subscribe(() => {});

    }
  }

}
