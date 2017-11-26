import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Quiz } from './data/quiz';
import { QUIZ } from './data/mock-quiz';

@Injectable()
export class QuizService {

  constructor() { }

  getQuiz(): Observable<Quiz> {
    return of(QUIZ);
  }
    
}