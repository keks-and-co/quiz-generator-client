import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Quiz } from './data/quiz';
import { QUIZ } from './data/mock-quiz';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class QuizService {

  constructor() { }

  getQuiz(id: number = 0): Observable<Quiz> {
    // of(QUIZ.find(quiz => quiz.id === id));
    return of(QUIZ);
  }
    
}