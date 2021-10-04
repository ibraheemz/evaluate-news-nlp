import "regenerator-runtime/runtime";
import { checkForText } from "./textChecker";
const handleSubmit = async (event) => {
  event.preventDefault();

  let formText = document.getElementById("name").value;
  const formatedText = "&lang=en&of=json&txt=" + encodeURI(formText);
  console.log("::: Form Submitted :::");

  const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
  const key = process.env.API_KEY;

  const response = await fetch(baseURL + key + formatedText)
    .then(
      (response) => (
        console.log(response),
        {
          status: response.status,
          body: response.json(),
        }
      )
    )
    .then(({ status, body }) => {
      console.log(status);
      console.log(body);
      return body;
    })
    .catch((error) => console.log("error", error));
  console.log(response);

  Client.checkForText(formText)
    ? ((document.getElementById("ageement").innerHTML = response.agreement),
      (document.getElementById("subjectivity").innerHTML =
        response.subjectivity),
      (document.getElementById("score_tag").innerHTML = response.score_tag),
      (document.getElementById("irony").innerHTML = response.irony),
      (document.getElementById("confidence").innerHTML = response.confidence))
    : alert("invalid text");
};

export { handleSubmit };
