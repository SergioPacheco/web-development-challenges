// Information to reach API
const url = "https://api.datamuse.com/words";
const queryParams = "?sl=";

// Selects page elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  fetch(endpoint, { cache: "no-cache" }).then(
    (response) => {
      if (response.ok) {
        // renderJsonResponse(response);
        return response.json();
      }
      throw new Error("Request failed!");
    },
    (networkError) => console.log(networkError.message)
  );
};

// async GET Requests II
const getData2 = async () => {
  try {
    const response = await fetch("https://api-to-call.com/endpoint");
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
};

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener("click", displaySuggestions);
