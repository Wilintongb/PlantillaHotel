import React, { useEffect, useState } from 'react';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const url = 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/offers?...';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'tu_api_key',
            'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
        }
    };

    const fetchRooms = async () => {
        setLoading(true);
        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error('Error fetching rooms');
            const result = await response.json();
            setRooms(result.data || []); // Ajusta según la estructura
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    return (
        <div>
            <h3>Available Rooms</h3>
            {loading && <p>Loading rooms...</p>}
            {error && <p>Error: {error}</p>}
            {rooms.map((room, index) => (
                <div key={index}>
                    <h4>{room.title}</h4>
                    <p>{room.description}</p>
                    <p>Price: {room.price}</p>
                    <img src={room.image} alt={room.title} />
                </div>
            ))}
        </div>
    );
};

export default Rooms;




