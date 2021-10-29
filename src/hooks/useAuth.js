import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;




/*const travel = [
    {
        name: 'Madrid',
        img: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-41-1100x650.jpg',
        price: '$1100',
        review: '4.9',
        shortDes: "Madrid, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks.",
        description: "Madrid, heart of the country, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro. It's also known for its renaissance and contemporary art museums, sunny blue skies, unique neighborhoods, and bustling nightlife. Madrid is a city of joy and life. Once you visit, you'll most definitely wish to go back."
    },
    {
        name: 'Seminyak',
        img: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-47-1100x650.jpg',
        price: '$1000',
        review: '5.0',
        shortDes: "Seminyak is a beach resort area at the southern end of Bali, Indonesia, with many luxury hotels, villas and spas, as well as high-end shopping and restaurants.",
        description: "Seminyak is home to a myriad of sprawling beach resorts, gorgeous hotels and cool little boutique spots and homestays too. It's the perfect spot to still be in the action of Bali.It's one of the most popular areas to stay in Bali. Brimming with delicious restaurants, beach clubs, boutique shops, beaches "
    },
    {
        name: 'Barcelona',
        img: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-42-1100x650.jpg',
        price: '$1300',
        review: '4.4',
        shortDes: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture",
        description: "Barcelona is famous for its outstanding football team, stunning architecture, lively nightlife, sandy beaches, and world-class cuisine. Not to mention a vibrant cultural heritage and colourful neighbourhood festivals that attract visitors from around the world. City history museum MUHBA, includes several Roman archaeological sites. "
    },
    {
        name: 'Denpasar',
        img: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-48-1100x650.jpg',
        price: '$1150',
        review: '4.7',
        shortDes: "Denpasar is the capital city and main hub of the Indonesian province of Bali, in the southern part of the island.",
        description: "Denpasar is the capital City of Bali Island, and also acts as the major hub that connects the many tourists' destinations within Bali Island. Denpasar is also the site where the famous Bali Arts Festival is held annually.he main attractions of Denpasar, Bali's provincial capital, include several sites of historical and cultural significance."
    },
    {
        name: 'Vatican City',
        img: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-1.jpg',
        price: '$1290',
        review: '4.8',
        shortDes: "Vatican City, a city-state surrounded by Rome, Italy, is the headquarters of the Roman Catholic Church.",
        description: "A visit to the smallest state in the world is absolutely worth doing at least once in a lifetime. From St Peter's Basilica, to the Vatican Gardens, from the Vatican Museums and the Sistine Chapel to the archaeological points, the beauty of the Vatican is unparalleled, and every corner is rich in art and history."
    },
    {
        name: 'Seville',
        img: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-2.jpg',
        price: '$1330',
        review: '4.9',
        shortDes: "Seville is the capital and largest city of the Spanish autonomous community of Andalusia and the province of Seville.",
        description: "Seville, Spain took top honors in the travel site's annual Best in Travel roundup.The city is known for its rich history, stunning architecture and authentic culture that includes plenty of tapas tasting and Flamenco dancing.It was said to have been built by Hercules himself and its fascinating history makes it one of Spain's most intriguing places to visit."
    }
] */