import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import BookingForm from '../BookingForm/BookingForm';

const PlaceOrder = () => {
    const [bookings, setBookings] = useState([]);

    /*const handleRemove = key => {
        const newBooked = bookings.filter(booking => booking._id !== key);
        setBookings(newBooked);
    }*/

    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gridRowGap: '10px'
    }
    useEffect(() => {
        //fetch(`http://localhost:7000/bookings`)
        fetch(`https://guarded-tor-97154.herokuapp.com/tours`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to cancel your booking?')
        if (proceed) {
            //const url = `http://localhost:7000/bookings/${id}`
            const url = `https://guarded-tor-97154.herokuapp.com/tours/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const newBooked = bookings.filter(booking => booking._id !== id);
                        setBookings(newBooked);
                    }
                })
        }
    }

    return (
        <div className="my-5 p-4">
            <h3>Booked tours</h3>
            <div style={style}>
                {
                    bookings.map(booking => <Booking key={booking._id} booking={booking} handleDelete={handleDelete}></Booking>)
                }

            </div>
            <BookingForm />
        </div>
    );
};

export default PlaceOrder;



// const a = [
//     {
//         name: 'Denpasar',
//         img: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-48-1100x650.jpg',
//         price: '$1150',
//         review: 4.7,
//         shortDes: "Madrid, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro.",
//         description: "Denpasar is the capital City of Bali Island, and also acts as the major hub that connects the many tourists' destinations within Bali Island. Denpasar is also the site where the famous Bali Arts Festival is held annually.he main attractions of Denpasar, Bali's provincial capital, include several sites of historical and cultural significance."
//     },
//     {
//         name: 'Vaticam City',
//         img: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-1.jpg',
//         price: '$1290',
//         review: 4.8,
//         shortDes: "Madrid, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro.",
//         description: "A visit to the smallest state in the world is absolutely worth doing at least once in a lifetime. From St Peter's Basilica, to the Vatican Gardens, from the Vatican Museums and the Sistine Chapel to the archaeological points, the beauty of the Vatican is unparalleled, and every corner is rich in art and history."
//     },
//     {
//         name: 'Madrid',
//         img: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-41-1100x650.jpg',
//         price: '1350',
//         review: 5.0,
//         shortDes: "Madrid, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro.",
//         description: "Madrid highlights the Spanish capital's extensive variety of history, art, food, fashion, and nightlife. The city has one of Europe's finest collections of Spanish and Latin American art, spread throughout its museums and galleries.Madrid is known for its historical buildings, food markets, and the royals."
//     },
//     {
//         name: 'Seville',
//         img: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-2.jpg',
//         price: '1210',
//         review: 4.8,
//         shortDes: "Seville is the capital and largest city of the Spanish autonomous community of Andalusia and the province of Seville",
//         description: "Seville, along with Córdoba and Granada, is one of the three most famous cities in Andalucia. Visiting Seville means discovering a very rich architectural and historical legacy, but also diving in Spanish culture, with tapas, sangria and flamenco.Seville, famous for its flamenco dancing and architectural designs.."
//     },
//     {
//         name: 'Seminyak',
//         img: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-47-1100x650.jpg',
//         price: '1400',
//         review: 4.6,
//         shortDes: "Seminyak is a mixed tourist residential area on the west coast of Bali in Indonesia, just north of Kuta and Legian.",
//         description: "Seminyak. Seminyak is home to a myriad of sprawling beach resorts, gorgeous hotels and cool little boutique spots and homestays too. It's the perfect spot to still be in the action of Bali. Seminyak is one of the most popular areas to stay in Bali.Seminyak is the centre in Bali for hip and inventive fashion boutiques, other designer stores and art studios."
//     },
//     {
//         name: 'Barcelona',
//         img: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-42-1100x650.jpg',
//         price: '1320',
//         review: 4.9,
//         shortDes: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture.",
//         description: "Barcelona is famous for its outstanding football team, stunning architecture, lively nightlife, sandy beaches, and world-class cuisine. Not to mention a vibrant cultural heritage and colourful neighbourhood festivals that attract visitors from around the world.Barcelona is known for its exceptional soccer and the brilliant architecture of Antoni Gaudi."
//     },

// ]