import { Component, OnInit } from '@angular/core';
import { Quiz } from '../data/quiz';
import { Answer } from '../data/answer';

import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz = {};

  constructor(private quizService: QuizService) { } 

  getQuiz(): void {
    setTimeout(() => {
      this.quizService.getQuiz()
          .subscribe(quiz => this.quiz = quiz);
    }, 3000);
  }

  ngOnInit() {
    this.getQuiz();
  }

  selectedAnswer: Answer;
  
  onSelect(answer1: Answer): void {
    this.selectedAnswer = answer1;
  }

}
