import { Injectable } from "@angular/core";
import { quizData } from "../app.component";

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
    question1 = {"question": "Combien de personnes ont un handicap visuel en France ?", "type": "QCM", "possibilities": ["700000", "1,7M", "2,4M"], "trueAnswer": 2, "answerText": "1 personne aveugle ou malvoyante naît toutes les 15 heures. En France, il y a 207 000 aveugles et malvoyants profonds et 932 000 malvoyants moyens (ils ne peuvent distinguer un visage à 4 mètres et la lecture de près est impossible). Source : Fédération des Aveugles de France"};
    question2 = {"question": "L'accessibilité numérique est un concept exclusivement français ou francophone.", "type": "Tf", "trueAnswer": false, "answerText": "L'accessibilité numérique a été pensée dès la création d'Internet. 'Le pouvoir du Web est dans son universalité. L’accès pour tous, quel que soit le handicap, est un aspect essentiel.' Tim Berners-Lee, directeur du W3C et inventeur du World Wide Web"}
    question3 = {"question": "Citez 3 exemples de handicaps cognitifs.", "type": "Open", "answerText": "Un trouble cognitif correspond à une altération d’une ou plusieurs fonctions cognitives pour une raison neurologique, psychiatrique, médicamenteuse ou génétique."}
    questions = quizData["questions"];

    getQuestion(n: number) {
        return this.questions[n];
    }

    getNumberOfQuestions() {
      return this.questions.length;
    }
  
  }