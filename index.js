let ratingSelected;

document.addEventListener('DOMContentLoaded', function(event) {
  const myForm = document.getElementById('ratingForm');
  const ratings = myForm.querySelectorAll('input[type="radio"]');
  const submitBtn = document.getElementById('submitBtn');
  const ratingContainer = document.getElementById('rating_container');
  const thanksContainer = document.getElementById('thanks_container')

  for(let i = 0; i < ratings.length; i++) {
    // add on change event listener for each radio in the form:
    ratings[i].addEventListener('change', function(event) {
      ratingSelected = ratings[i].value;
    });
  }
  submitBtn.addEventListener('click', function(event) {
    event.preventDefault();    
    ratingContainer.classList.add("hidden");
    thanksContainer.classList.remove("hidden");

    const ratingText = document.getElementById('rating');
    ratingText.innerText += " " + ratingSelected + " out of 5";
  });
});
