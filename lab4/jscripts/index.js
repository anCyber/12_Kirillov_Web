function changeTheme() {
    document.body.classList.toggle("light-theme");
}



const theme_changer_button = document.getElementById("theme_button");
theme_changer_button.addEventListener("click", changeTheme);







const userReviews = [
    { reviewerName: "Никита", reviewText: "Всё классно, но 100% написано нейросетью, так что доп.баллов не поставлю." },
    { reviewerName: "Макс Ферстаппен", reviewText: "Да, парни, я был там, это было ооооочень вайбово." },
    { reviewerName: "Имя", reviewText: "Сайт фигня, существования не заслуживает." }
];


function renderReviews() {
    let reviewsFlexbox = document.getElementById("reviews_vertical_flexbox");
    reviewsFlexbox.innerHTML = "";

    for (let reviewInfo of userReviews) {
        let singleReview = document.createElement("section");
        singleReview.className = "single_review"; 
        singleReview.innerHTML = `<h4>${reviewInfo.reviewerName}</h4> <p>${reviewInfo.reviewText}</p>`;

        reviewsFlexbox.appendChild(singleReview);
    }
}

function sendReview(event) {
    event.preventDefault();
    let nameInputSpace = document.getElementById("reviewer_name");
    let textInputSpace = document.getElementById("review_text");

    let reviewerName = nameInputSpace.value.trim();
    if (reviewerName.length > 80) {
        alert("Имя слишком длинное.");
        return;
    }
    let reviewText = textInputSpace.value.trim();
    if (reviewText == "") {
        alert("Отзыв не содержит значимых символов.");
        return;
    }

    userReviews.push(
        {
        reviewerName: reviewerName,
        reviewText: reviewText
        }
    );
    renderReviews();
    newReviewForm.reset();
}

const reviewsFlexbox = document.getElementById("reviews_flexbox");
const newReviewForm = document.getElementById("user_review_form");
const reviewSubmitterButton = document.getElementById("submit_review_button");

newReviewForm.addEventListener("submit", sendReview);
renderReviews();