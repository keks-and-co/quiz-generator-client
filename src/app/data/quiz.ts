import { Question } from './question';

export class Quiz {
    id: number;
    name: string;
    // isAnonymous: boolean;
    per_page: number;
    is_active: boolean;
    questions: Array<Array<Question>>;
  }
