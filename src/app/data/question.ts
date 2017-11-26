import { Answer } from './answer';

export class Question {
    id: number;
    title: string;
    answers: Array<Answer>;
    type: string;
    display: string;
    multipleAnswers: boolean;
  }