import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule,
         MatCardModule,
         MatButtonModule,
         MatStepperModule,
         MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { RecaptchaModule } from 'ng-recaptcha';
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
    RecaptchaModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatIconModule,
    HttpClientModule,
    BrowserModule,
    AsyncLocalStorageModule,
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
