const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Naruto Ramen", restaurant: "Mitsuyado Se", image: "images/naruto.jpg", rating: 4, comment: "Bursts with flavor!" },
    { id: 3, name: "Nirvana Ramen", restaurant: "Ramen Nagi", image: "images/nirvana.jpg", rating: 5, comment: "A flavor explosion!" },
    { id: 4, name: "Kojiro Ramen", restaurant: "Ramen Kojiro", image: "images/kojiro.jpg", rating: 3, comment: "Too much broth." },
    { id: 5, name: "Gyukotsu Ramen", restaurant: "Ramen Nagi", image: "images/gyukotsu.jpg", rating: 2, comment: "Not my favorite." }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const ramenMenu = document.getElementById("ramen-menu");
    const ramenDetail = document.getElementById("ramen-detail");
    const detailImage = document.getElementById("ramen-img");
    const detailName = document.getElementById("ramen-name");
    const detailRestaurant = document.getElementById("ramen-restaurant");
    const detailRating = document.getElementById("ramen-rating");
    const detailComment = document.getElementById("ramen-comment");
    const newRamenForm = document.getElementById("new-ramen");
  
    function displayRamens() {
      ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.classList.add("ramen-thumbnail");
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
      });
    }
  
    function handleClick(ramen) {
      detailImage.src = ramen.image;
      detailName.textContent = ramen.name;
      detailRestaurant.textContent = `Restaurant: ${ramen.restaurant}`;
      detailRating.textContent = `Rating: ${ramen.rating}`;
      detailComment.textContent = `Comment: ${ramen.comment}`;
    }
  
    function addSubmitListener() {
      newRamenForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const newRamen = {
          id: ramens.length + 1,
          name: document.getElementById("name").value,
          restaurant: document.getElementById("restaurant").value,
          image: document.getElementById("image").value,
          rating: document.getElementById("rating").value,
          comment: document.getElementById("comment").value
        };
  
        ramens.push(newRamen);
  
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.classList.add("ramen-thumbnail");
        img.addEventListener("click", () => handleClick(newRamen));
        ramenMenu.appendChild(img);
  
        newRamenForm.reset();
      });
    }
  
    function main() {
      displayRamens();
      addSubmitListener();
    }
  
    main();
  });