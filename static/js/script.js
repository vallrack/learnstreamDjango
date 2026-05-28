 const vibeData = {
    sunny: {
        heroImg: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1920&q=80",
        keyword: "sunlight",
        products: [
            { name: "Maldives Private Villa", price: "$3,500", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80" },
            { name: "Amalfi Coast Escape", price: "$1,800", img: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?auto=format&fit=crop&w=600&q=80" },
            { name: "Santorini Sunsets", price: "$2,200", img: "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ]
    },
    party: {
        heroImg: "https://images.unsplash.com/photo-1758599669452-0cf5fba4eb97?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        keyword: "energy",
        products: [
            { name: "Ibiza VIP Access", price: "$1,200", img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=600&q=80" },
            { name: "Berlin Underground", price: "$800", img: "https://images.unsplash.com/photo-1558317751-bc3ed6f85f72?auto=format&fit=crop&w=600&q=80" },
            { name: "Vegas Neon Nights", price: "$1,500", img: "https://images.unsplash.com/photo-1758637720734-c13a5f0d46b7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ]
    },
    spirit: {
        heroImg: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1920&q=80",
        keyword: "peace",
        products: [
            { name: "Kyoto Zen Retreat", price: "$2,100", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80" },
            { name: "Bali Healing Journey", price: "$1,400", img: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=600&q=80" },
            { name: "Rishikesh Ashram", price: "$950", img: "https://images.pexels.com/photos/20035462/pexels-photo-20035462.jpeg?_gl=1*1x0lyy2*_ga*OTQ5Mjc0MTEzLjE3NzU0MDg1MjA.*_ga_8JE65Q40S6*czE3NzU5Mzg3MTUkbzQkZzEkdDE3NzU5Mzg3MjckajQ4JGwwJGgw" }
        ]
    },
    adventure: {
        heroImg: "https://images.unsplash.com/photo-1559926431-73aebfacd993?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        keyword: "thrills",
        products: [
            { name: "Machu Picchu Trek", price: "$2,400", img: "https://images.unsplash.com/photo-1703567746209-3dad39cfad8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Patagonia Expedition", price: "$3,100", img: "https://images.unsplash.com/photo-1708394534994-4e66c2b09e1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Swiss Alps Climb", price: "$1,900", img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=600&q=80" }
        ]
    }
};

function changeVibe(vibe, title) {
    const data = vibeData[vibe];
    
    // Change Theme
    document.body.setAttribute('data-vibe', vibe);
    
    // Update Hero Image & Text
    document.getElementById('hero-bg').style.backgroundImage = `url('${data.heroImg}')`;
    document.getElementById('vibe-text').innerText = data.keyword;
    document.getElementById('product-heading').innerText = `Curated for: ${title}`;

    // Update Active Button Status
    const buttons = document.querySelectorAll('.vibe-picker button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Render Products
    const list = document.getElementById('product-list');
    list.innerHTML = ""; 

    data.products.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="card-img">
            <div class="card-info">
                <h3>${item.name}</h3>
                <span class="price">${item.price}</span>
                <button class="btn-main" style="width:100%">Book Now</button>
            </div>
        `;
        list.appendChild(card);
    });
}

// Plane Button Visibility Logic
const backToTopBtn = document.getElementById('backToTop');
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
};

// Plane Flight Animation & Scroll
function flyToTop() {
    backToTopBtn.classList.add('take-off'); // Trigger CSS animation
    
    // Wait a brief moment before scrolling so you see the start of the flight
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);

    // Reset button after animation completes so it can be used again
    setTimeout(() => {
        backToTopBtn.classList.remove('take-off');
    }, 1200);
}

// Initialize default state
window.onload = () => {
    // Fake event object to satisfy the active class logic on load
    window.event = { target: document.querySelector('.vibe-picker button.active') };
    changeVibe('sunny', 'Soak in the Light');
};

// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('nav-links'); // This will now work!
    const burger = document.querySelector('.burger');
    
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
}

// Close menu when a link is clicked (optional but good UX)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('nav-links');
        const burger = document.querySelector('.burger');
        
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});