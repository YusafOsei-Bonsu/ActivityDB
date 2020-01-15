
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('places').del()
    .then(function () {
      // Inserts seed entries
      return knex('places').insert([
        {placeid: 1, placename: 'London Eye', streetaddress: 'Riverside Building, County Hall, Westminster Bridge Road', county: 'London', postcode: 'SE17PB'},
        {placeid: 2, placename: 'Bunker 51', streetaddress: '3 Herringham Rd, Greenwich Peninsula', county: 'London', postcode: 'SE78NJ'},
        {placeid: 3, placename: 'Natural History Museum', streetaddress: 'Cromwell Rd, South Kensington', county: 'London', postcode: 'SW7 5BD'}
      ]);
    });
};