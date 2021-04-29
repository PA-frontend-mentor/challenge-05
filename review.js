const bottomSection = document.getElementsByClassName("bottom-section");

fetch("review.json")
  .then((response) => response.json())
  .then((data) => {
    review(data);
  });

const review = ({ review }) => {
  review.forEach((review) => {
    const reviewWrapperDiv = document.createElement("div");
    reviewWrapperDiv.className = "review-wrapper";

    const upperDiv = document.createElement("div");
    upperDiv.className = "upper-div";

    const img = document.createElement("img");
    img.className = "review-img";
    img.src = review.image;

    const headerWrapepr = document.createElement("div");
    headerWrapepr.className = "header-wrapper";

    const reviewerName = document.createElement("p");
    reviewerName.innerText = review.writer;

    const reviewerTitle = document.createElement("span");
    reviewerTitle.innerText = review.position;

    headerWrapepr.appendChild(reviewerName);
    headerWrapepr.appendChild(reviewerTitle);

    upperDiv.appendChild(img);
    upperDiv.appendChild(headerWrapepr);

    const reviewerText = document.createElement("p");
    reviewerText.className = "review-text";
    reviewerText.innerText = review.text;

    reviewWrapperDiv.appendChild(upperDiv);
    reviewWrapperDiv.appendChild(reviewerText);

    bottomSection[0].appendChild(reviewWrapperDiv);
  });
};
