import { Injectable, signal } from "@angular/core";
import { quizData } from "./app.component";
import { Router } from "@angular/router";

class RandomizedIndexQueue {
  // https://gist.github.com/4skinSkywalker/f10939e0b070fe1815933730670177df
  private remainingIndices;
  private intialSize;
  private currentSize;
  constructor(size: number) {
    this.intialSize = size;
    this.currentSize = size;
    this.remainingIndices = [...Array(size).keys()];
  }

  private randomId() {
    // conversion en entier avec la comparaison BitWise OR
    return Math.random() * (this.currentSize - 1) | 0
  }

  isEmpty() {
    return (this.currentSize < 1)
  }

  replenish() {
    this.remainingIndices = [...Array(this.intialSize).keys()];
    this.currentSize = this.intialSize;
  }

  dequeueIndex() {
    if (this.isEmpty()) {
      this.replenish()
    }
    const id = this.randomId();
    const index = this.remainingIndices[id];
    this.remainingIndices.splice(id, 1);
    this.currentSize--;
    return index;
  }

  *[Symbol.iterator]() {
    const copy = new RandomizedIndexQueue(this.intialSize);
    while (!copy.isEmpty()) {
      yield copy.dequeueIndex();
    }
  }
}


class TopicsQueue {
  private possibleTopics;
  private topicsCycle;
  private numberOfQuestionsPerCycle = 1;
  private topics: string[] = []; // queue qui va permettre de tirer les topics selon le cycle
  constructor(possibleTopics: string[] = [], topicsCycle: number[] = []) {
    this.possibleTopics = possibleTopics;
    this.topicsCycle = topicsCycle;
  }

  rebuildQueue() {
    this.topics = [];
    this.topicsCycle.forEach((n, i) => { // n = occurrences, i = index
      this.topics.push(...Array(n).fill(this.possibleTopics[i * this.numberOfQuestionsPerCycle]));
    });
  }

  initialize(nQuestions: number) {
    this.numberOfQuestionsPerCycle = nQuestions;
    this.rebuildQueue();
  }

  isEmpty() {
    return this.topics.length < 1;
  }

  deqeue() {
    return this.topics.shift(); //pop en Python
  }

  getPossibleTopics() {
    return this.possibleTopics;
  }

  getNumberOfQuestions() {
    return this.topicsCycle.length * this.numberOfQuestionsPerCycle;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public quiz_segment_topics_queue;
  quiz_segments = quizData["questions"];
  quiz_segment_pool: Record<string, RandomizedIndexQueue> = {}
  questionNumber = signal(0);
  hasEnded = signal(false);
  numberOfQuestions = signal(0);

  constructor() {
    this.quiz_segment_topics_queue = new TopicsQueue(quizData["question_topics"], quizData["question_cycle"]);
    for (const question_topic of this.quiz_segment_topics_queue.getPossibleTopics()) {
      const rq = new RandomizedIndexQueue(this.quiz_segments[question_topic].length);
      this.quiz_segment_pool[question_topic] = rq;
    }
  }

  startQuiz(nQuestions: number) {
    this.questionNumber.set(0);
    this.hasEnded.set(false);
    this.quiz_segment_topics_queue.initialize(nQuestions);
    this.numberOfQuestions.set(this.quiz_segment_topics_queue.getNumberOfQuestions());
  }

  getNewQuestionHash() {
    const question_topic = this.quiz_segment_topics_queue.deqeue();
    return [question_topic, this.quiz_segment_pool[question_topic!].dequeueIndex()];
  }

  getSpecificQuestion(question_topic: string, question_id: number) {
    return this.quiz_segments[question_topic][question_id];
  }

  isFinished() {
    return this.quiz_segment_topics_queue.isEmpty();
  }
  getNumberOfTopics() {
    return this.quiz_segment_topics_queue.getPossibleTopics().length;
  }
}
