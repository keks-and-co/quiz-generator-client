import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent }      from './quiz/quiz.component';
import { StartQuizComponent }      from './start-quiz/start-quiz.component';

const routes: Routes = [
  { path: 'doquiz', component: QuizComponent },
  { path: '', component: StartQuizComponent },
  { path: ':quizId', component: StartQuizComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}