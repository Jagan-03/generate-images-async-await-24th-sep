let getData = async () => {
  const url = "https://randomuser.me/api/?gender=female&results=10";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

let displayImage = async () => {
  try {
    let data = await getData();
    let displayCont = document.getElementById("display");
    data.results.forEach((user) => {
      // Creating new card for each user
      let userCont = document.createElement("div");
      userCont.classList.add("card", "col-lg-3");
      // New image element for each user
      let newImage = document.createElement("img");
      newImage.src = user.picture.large;
      newImage.alt = user.name.first;
      newImage.classList.add("card-img-top");
      // New Name container for each user
      let nameCont = document.createElement("div");
      nameCont.classList.add("card-body", "text-center");
      let name = document.createElement("h6");
      name.innerText = `${user.name.first} ${user.name.last}`;
      nameCont.appendChild(name);
      // Appending all image and name cont to user cont
      userCont.append(newImage, nameCont);
      // Appending the userCont to main cont
      displayCont.appendChild(userCont);
    });
  } catch (err) {
    console.log(err);
  }
};
