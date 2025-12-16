const loadJokes = async () => {
  try {
    const chuckNorrisFetch = await fetch(
      "https://api.chucknorris.io/jokes/random",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const jokeData = await chuckNorrisFetch.json();
    document.querySelector("#joke").innerHTML = jokeData.value;
  } catch (error) {
    console.log(error);
  }
};

document.querySelector("#btn").addEventListener("click", loadJokes);
