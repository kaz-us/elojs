var box = {
  locked: true,
  unlock: function() {
    this.locked = false;
    console.log('Коробку открылию');
  },
  lock: function() {
    this.locked = true;
    console.log('Коробку закрыли!');
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Заперто!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  box.unlock();
  try {
    body();
  }
  finally {
    box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("золотишко");
});
try {
  withBoxUnlocked(function() {
    throw new Error("Пираты на горизонте! Отмена!");
  });
} catch (e) {
  console.log("Произошла ошибка:", e);
}
console.log(box.locked);
// → true