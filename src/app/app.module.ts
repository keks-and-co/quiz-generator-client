import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';

import { QuizService } from './quiz.service';
import { AppRoutingModule } from './/app-routing.module';
import { StartQuizComponent } from './start-quiz/start-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    StartQuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
