import { Question } from './question';

export class Quiz {
    id: number;
    title: string;
    isAnonymous: boolean;
    isActive: boolean;
    qustionBlock: Array<Array<Question>>;
  }