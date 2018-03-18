import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Quiz } from './data/quiz';
import { QUIZ } from './data/mock-quiz';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class QuizService {

  constructor(
    private http: HttpClient) { }

  private quizesUrl = 'http://localhost/quiz-generator/public/api/quiz';  // URL to web api

  getQuiz(id: number = 66): Observable<Quiz> {
    const url = `${this.quizesUrl}/${id}`;

    return this.http.get<Quiz>(url);

  }


}
