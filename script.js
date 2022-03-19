const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke

    var msg = new SpeechSynthesisUtterance();
    msg.text = data.joke;
msg.lang = 'en';
    msg.rate = 0.7;
    window.speechSynthesis.speak(msg);
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }

// var voices = window.speechSynthesis.getVoices();
// msg.voice = voices[10];
// msg.volume = 1; // From 0 to 1
// msg.rate = 0.6; // From 0.1 to 10
// msg.pitch = 1; // From 0 to 2
// msg.text = data.joke;
// msg.lang = 'en';
// speechSynthesis.speak(msg);
