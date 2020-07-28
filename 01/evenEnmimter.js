// 事件订阅发布机制

class EventEimitter {
  constructor() {
    this.hindles = {};
  }
  on(eventName, callback) {
    if (!this.hindles) {
      this.hindles = {};
    }
    if (!this.hindles[eventName]) {
      this.hindles[eventName] = [];
    }
    this.hindles[eventName].push(callback);
  }
  emit(eventName, ...arg) {
    if (this.hindles[eventName]) {
      this.hindles[eventName].forEach((cb) => {
        cb(...arg);
      });
    }
  }
}
