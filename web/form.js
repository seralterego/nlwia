const form = document.querySelector("#form");
const input = document.querySelector("#url");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const videoURL = input.value;
  if (!videoURL.includes("shorts")) {
    // console.log("URL DO VÍDEO:", videoURL);
    // console.log("Esse vídeo não parece ser um short.");
    return (content.textContent = "Esse vídeo não parece ser um short.");
  }
  const [_, params] = videoURL.split("/shorts/");
  const [videoID] = params.split("?si");
  // console.log(videoID);

  content.textContent = "Obtendo o texto do áudio...";
});
