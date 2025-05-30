// The End Of Year Date To Countdown Date

document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to
  var toDayFromNow =
    new Date("Jul 11, 2025 23:59:59").getTime() / 1000 +
    3600 / 60 / 60 / 24 -
    1;
  // Set Up FlipDown
  var flipdown = new FlipDown(toDayFromNow)

    // Start The Count Down
    .start()
    // Do Something When The Countdown Ends
    .ifEnded(() => {
      document.querySelector(".flipdown").innerHTML = `<h2>Timer is ended</h2>`;
    });
});
