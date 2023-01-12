setInterval(() => {
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");
  const ampm = document.querySelector("#ampm");

  //
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  //to convert to 24hrs
  if (h > 12) {
    h = h - 12;
  }

  //add zero to single digit
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //
  hours.innerHTML = `${h}:`;
  minutes.innerHTML = `${m}:`;
  seconds.innerHTML = s;
  ampm.innerHTML = `${am}`;
}, 1000);
