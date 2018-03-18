import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Quiz } from './data/quiz';
import { QUIZ } from './data/mock-quiz';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class QuizService {

  constructor(
    private http: HttpClient) { }

  private quizesUrl = 'http://localhost/quiz-generator/public/api/quiz';  // URL to web api

  getQuiz(id: string): Observable<Quiz> {
    const url = `${this.quizesUrl}/${id}`;

    return this.http.get<Quiz>(url).pipe(
      catchError(this.handleError<Quiz>(`getHero id=${id}`))
    );
  }

  tryQuiz(id: string = '0') {
    const url = `${this.quizesUrl}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError<Quiz>(`getHero id=${id}`))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
