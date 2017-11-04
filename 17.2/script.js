function all(promises) {
    return new Promise(function(success, fail) {
      if (promises.length === 0) success(promises);
      let res = []
      let counter = 0;
      for (let i = 0; i < promises.length; i++) {
      let element = promises[i];
        element.then(val=>{
          res[i]=val;
          counter++;
          if (counter === promises.length) success(res);
        }).catch (e=>fail(e)) 
}
    });
  }

  // Проверочный код.
  all([]).then(function(array) {
    console.log("Это должен быть []:", array);
  });

  function soon(val) {
    return new Promise(function(success) {
      setTimeout(function() { success(val); },
                 Math.random() * 500);
    });
  }

  all([soon(1), soon(2), soon(3)]).then(function(array) {
    console.log("Это должен быть [1, 2, 3]:", array);
  });

  function fail() {
    return new Promise(function(success, fail) {
      fail(new Error("бабах"));
    });
  }
  
  all([soon(1), fail(), soon(3)]).then(function(array) {
    console.log("Сюда мы попасть не должны ");
  }, function(error) {
    if (error.message != "бабах")
      console.log("Неожиданный облом:", error);
  });