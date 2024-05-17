export default class Ranking {
    level?: number;
    avgTime?: number;
  
    constructor(level?: number, avgTime?: number) {
        this.level = level;
        this.avgTime = avgTime;
    }
  }