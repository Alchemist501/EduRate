const reviewsContainer = document.getElementById('reviews-container');
const loadMoreButton = document.getElementById('load-more');
const studentReviewsChart = document.getElementById('studentReviewsChart').getContext('2d');

const ratings = [4, 5, 3, 4, 5]; // Replace with your review ratings

const data = {
    labels: ['Review 1', 'Review 2', 'Review 3', 'Review 4', 'Review 5'],
    datasets: [{
        label: 'Student Reviews',
        data: ratings,
        borderColor:'#4d0505' ,
        fill: false
    }]
};

const config = {
    type: 'line',
    data: data, //add the data here
      options: {
        responsive: true,
        backgroundColor: '#8f80b9',        
        scales: {
        y: {
            beginAtZero: true,
            grid: {
            borderWidth: 3,
            color: '#6d054a'
            }
        },
        x: {
            grid: {
            borderWidth: 3,
            color: '#6d054a'
            }
        }
    }
  }
};

new Chart(studentReviewsChart, config);

const reviews = [
    { name: 'Student 1', review: 'Great class!' },
    { name: 'Student 2', review: 'I learned a lot!' },
    { name: 'Student 3', review: 'Excellent teacher!' },
    // Add more reviews here
];

function loadReviews(amount) {
    for (let i = 0; i < amount; i++) {
        const review = reviews.shift();
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <h2>${review.name}</h2>
            <p>${review.review}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    }

    if (reviews.length === 0) {
        loadMoreButton.style.display = 'none';
    }
}

loadReviews(3);

loadMoreButton.addEventListener('click', () => {
    loadReviews(3);
});
