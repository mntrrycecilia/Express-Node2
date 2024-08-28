// your timeword solutio goes here

function timeWord(timeString) {
  let [hours, minutes] = timeString.split(':');
  hours = parseInt(hours);
  minutes = parseInt(minutes);

  if (timeString === "00:00") return "midnight";
  if (timeString === "12:00") return "noon";

  let period = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12;

  let hourWord = convertNumberToWord(hours);
  let minuteWord = convertMinutesToWord(minutes);

  if (minutes === 0) {
    return `${hourWord} o'clock ${period}`;
  } else {
    return `${hourWorld} ${minuteWord} ${period}`;
  }



}

function convertNumberToWord(number) {
  const numberWords = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  return numberWords[number % 12];
}

function convertMinutesToWqord(minutes) {
  const minuteTens = ["", "", "twenty", "thirty", "fourty", "fifty"];
  const mnuteUnits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  if (minutes < 10) {
    return `oh ${minuteUnits[minutes]}`;
  }

  if (minutes < 20) {
    const teenWords = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "ninetieen"];
    return teenWords[minutes - 10];
  }

  let tens = Math.floor(minutes / 10);
  let units = minutes % 10;

  return `${minuteTens[tens]} ${minuteUnits[units]}`.trim();

}