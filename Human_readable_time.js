function humanReadable (seconds) {
    let ss = ('0' + (seconds % 60)).slice(-2);
    let mm = ('0' + (Math.floor(seconds/60) % 60)).slice(-2);
    let hh = ('0' + Math.floor(seconds / 3600)).slice(-2);
    return `${hh}:${mm}:${ss}`;
  }

const x = humanReadable(359999)
console.log(x)