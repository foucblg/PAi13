export class QuizQuestion {
    question_type: string;
    question: string;
    choices: any[];
    answers: any[];
    explication: string;
    source: string;
    constructor(
        question_type : string,
        question: string,
        choices: any[],
        answers: any[],
        explication: string,
        source: string,
    ) {
        this.question_type = question_type;
        this.question = question;
        this.choices = choices;
        this.answers = answers;
        this.explication = explication;
        this.source = source;
    }
  }