$(document).ready(function(){
    $('#backButton').click(function(){
        window.location.href = 'index.html';
    });

    // Articles data - You can structure this data as needed
    const articlesData = [
        {
            title: "Do Dogs Know Their Name?",
            content: "Yes, she knows that her name is Jimmy..."
        },
        {
            title: "Essential Tips to Raise Healthy Pets",
            content: "<ul><li>Give them attention</li><li>Give them toys</li></ul>"
        },
        {
            title: "Why Does My Dog Attack Me?",
            content: "<ul><li>Dominance or assertiveness over other dogs or humans</li><li>Frustration or stress due to lack of exercise, stimulation, or attention</li></ul>"
        },
        {
            title: "How to Throw a Birthday Party for Your Dog",
            content: "<ul><li>Send out dog-friendly invitations</li><li>Make tasty pupcakes or a dog birthday cake</li></ul>"
        }
        
    ];

    // Function to dynamically create articles
    function createArticle(title, content) {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
        return articleElement;
    }

    // Populate articles in the blog section
    const blogPostsSection = document.getElementById('blogPosts');
    articlesData.forEach(article => {
        const newArticle = createArticle(article.title, article.content);
        blogPostsSection.appendChild(newArticle);
    });
});
// JavaScript for Pet Services Page
// Any specific JavaScript for Pet Services can be added here

// Function for Collapsible Content
const collapsibleButtons = document.querySelectorAll('.collapsible-button');
collapsibleButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// Function for Collapsible Sets
const collapsibleSets = document.querySelectorAll('.collapsible-set');
collapsibleSets.forEach(set => {
    const buttons = set.querySelectorAll('.collapsible-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});

// Function to initialize Google Map (Contact Us Page)
function initMap() {
    const location = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
