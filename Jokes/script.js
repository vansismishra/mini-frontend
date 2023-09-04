/* //Using Promises
const fetchJoke = () => {
    const jokeElement = document.getElementById('joke');
    jokeElement.textContent = 'Fetching a joke...';

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json',
        },
    })
    .then((response) => response.json())
    .then((data) => {
        jokeElement.textContent = data.joke;
    })
    .catch((error) => {
        console.error('Error fetching joke:', error);
        jokeElement.textContent = 'Failed to fetch a joke. Please try again later.';
    });
};

// Event listener for the "Next Joke" button
const jokeButton = document.getElementById('jokebtn');
jokeButton.addEventListener('click', fetchJoke);

// Fetch and display an initial joke when the page loads
fetchJoke(); */

/* //Second Method
const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');

const generateJoke = () => {
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com', setHeader)
    .then((res) => res.json())
    .then((data) => {
        jokeElement.textContent = data.joke; // Display the fetched joke
    })
    .catch((error) => {
        console.log('Error:', error);
    });
}

jokeBtn.addEventListener('click', generateJoke);
generateJoke(); // Fetch and display a joke when the page loads */

//Using async await with error handling
const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');
const generateJokes = async () => {
    try{
     const setHeader = {
        headers: {
            Accept : "application/json"
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', setHeader);
    const data = await res.json();
    jokeElement.innerHTML = data.joke;
    }catch(err){
    console.log(`the error is ${err}`);
    }
}
jokeBtn.addEventListener('click', generateJokes);
generateJokes();