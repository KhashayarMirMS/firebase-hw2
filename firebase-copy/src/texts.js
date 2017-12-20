export default function getCards() {
    const numberOfCards = 3;

    const banners = [
        'img/banner1.png',
        'img/banner2.png',
        'img/banner3.png'
    ];
    const titles = ['Analytics', 'Authentication', 'Database'];
    const descriptions = ['Get detailed analytics to measure and analyze how users engage with your app',
        'Authenticate and manage users from a variety of providers without server-side code',
        'Store and sync data in realtime across all connected clients'
    ];
    const learnMores = ['https://firebase.google.com/docs/analytics/?authuser=0',
        'https://firebase.google.com/docs/auth/?authuser=0',
        'https://firebase.google.com/docs/database/?authuser=0'
    ];

    const cards = [];

    for (let i = 0; i < numberOfCards; ++i) {
        cards.push({
            key: i,
            banner: banners[i],
            title: titles[i],
            description: descriptions[i],
            learnMore: learnMores[i]
        });
    }

    return cards;
};