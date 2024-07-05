      let start = document.getElementById("start");
      let stop = document.getElementById("stop");
      let save = document.getElementById("save");
      let showtimer = document.getElementById("showtimer");
      let savetimer = document.getElementById("savetimer");

      let time = 0,
        myset,
        currentTIme = 0;
      function startFun() {
        currentTIme = new Date();
        myset = setInterval(() => {
          if (time > 60) {
            time = 0;
          }
          time = time + 1;
          showtimer.innerHTML = time;
        }, 1000);
      }

      function stopFun() {
        clearInterval(myset);
        currentTIme = 0;
      }

      function saveFun() {
        savetimer.innerHTML = `Your time is: ${time}`;
      }
      start.addEventListener("click", () => {
        if (currentTIme == 0) {
          startFun();
        } else {
          alert("Double click not allows...");
        }
      });
      stop.addEventListener("click", stopFun);
      save.addEventListener("click", saveFun);