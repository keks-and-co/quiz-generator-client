import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Quiz } from '../data/quiz';
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
  quiz = {};
  isLinear = false;
  formGroup: FormGroup;

  constructor(
    private quizService: QuizService,
    private _formBuilder: FormBuilder
  ) { }

  getQuiz(): void {
    setTimeout(() => {
      this.quizService.getQuiz()
          .subscribe(quiz => this.quiz = quiz);
    }, 3000);
  }

  ngOnInit() {
    this.getQuiz();
    this.formGroup = this._formBuilder.group({
    });
  }

  selectedAnswer: Answer;

  onSelect(answer1: Answer): void {
    this.selectedAnswer = answer1;
  }

}
