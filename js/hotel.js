/**
 * Build a JS object of your own to represent a hotel.
 * Properties of the hotel object should include the name of the hotel (The Quay), the total number of rooms (40), the current number of rooms booked (25), an array of the types of rooms (twin, double, suite), and function to check the availability.
 * One you've created your object, create a loop to log to the console all of the room types one-by-one. Then, update the booked rooms to 30, check the new availability, and output that using console.log
 */

var myHotel = {
    name: 'The Quay',
    rooms: 40,
    bookings: 25,
    typesOfRoom: [
        'twin',
        'double',
        'suite'
    ],
    // Runs the exercise.
    main: function() {
        this.viewRoomTypes();
        this.updateBookedRooms( 5 );
        this.showAvailability();
    },
    // Outputs the room types one-by-one.
    viewRoomTypes: function() {
        for ( var roomTypeIndex in this.typesOfRoom ) {
            console.log( 'Room Type: '+this.typesOfRoom[roomTypeIndex] );
        }
    },
    // Updates the number of booked rooms based on a passed in number.
    updateBookedRooms: function( newBookings ) {
        this.bookings += newBookings;
    },
    // Shows the number of rooms available.
    showAvailability: function() {
        console.log( 'Rooms Available: '+( this.rooms - this.bookings ) );
    }
}