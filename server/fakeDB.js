const Rental = require('./models/rentalModel');

class fakeDB {
    constructor() {
        this.rentals = [
            {
                id: 1,
                title: 'City Tours In Europe, Paris',
                city: 'Lviv',
                street: 'this is streat',
                category: 'house',
                image: 'http://wahabali.com/work/travelu/images/tours/img-01.jpg',
                datailImage: 'http://wahabali.com/work/travelu/images/slider/img-01.jpg',
                betrooms: 9,
                guests: 2,
                beds: 11,
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh...',
                dailyRate: 23,
                shared: true
            },
            {
                id: 2,
                title: 'Best of Canada Tours and Travel',
                city: 'Dybshe',
                street: 'this is streat',
                category: 'combo',
                image: 'http://wahabali.com/work/travelu/images/tours/img-04.jpg',
                datailImage: 'http://wahabali.com/work/travelu/images/slider/img-02.jpg',
                betrooms: 9,
                guests: 2,
                beds: 12,
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh...',
                dailyRate: 56,
                shared: false
            },
            {
                id: 3,
                title: 'Italy – 3 Days in Rome, Golden Gate',
                city: 'ternopil',
                street: 'this is streat',
                category: 'apartment',
                image: 'http://wahabali.com/work/travelu/images/tours/img-02.jpg',
                datailImage: 'http://wahabali.com/work/travelu/images/slider/img-03.jpg',
                betrooms: 9,
                guests: 2,
                beds: 10,
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh...',
                dailyRate: 223,
                shared: true
            }
        ];

    }
    async clearDB() {
        await Rental.deleteMany({});
    }

    pushRentalToDb () {
        this.rentals.forEach(rental => {
            const newRental = new Rental(rental);
            newRental.save();
        })
    }

    seedDB() {
        this.clearDB();
        this.pushRentalToDb();
    }
}

module.exports = fakeDB;