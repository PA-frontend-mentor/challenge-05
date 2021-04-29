const productRating = document.getElementsByClassName("product-rating");

const data = fetch("rating.json")
  .then((response) => response.json())
  .then((data) => {
    main(data);
  });

const main = ({ data }) => {
  data.forEach((name) => {
    const ratingWrapperDiv = document.createElement("div");
    ratingWrapperDiv.className = "rating-wrapper";

    const starsWrapperDiv = document.createElement("div");

    for (let index = 0; index < 5; index++) {
      const star = document.createElement("img");
      star.src = "./images/icon-star.svg";
      starsWrapperDiv.appendChild(star);
    }

    const rating = document.createElement("p");
    rating.innerText = `Rated 5 Stars in ${name}`;

    ratingWrapperDiv.appendChild(starsWrapperDiv);
    ratingWrapperDiv.appendChild(rating);

    productRating[0].appendChild(ratingWrapperDiv);
  });
};
