fetch("https://api.github.com/users/hiteshchoudhary") // fetch if successful will always return a respnnse obj
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("shit error!!!", error));
