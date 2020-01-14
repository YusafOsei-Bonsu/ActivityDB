
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('places').del()
    .then(function () {
      // Inserts seed entries
      return knex('places').insert([
        {placeid: 1, placename: 'London Eye', streetaddress: 'London eye way', county: 'london', postcode: 'AH78UI'},
        {placeid: 2, placename: 'Buckingham Palace', streetaddress: 'Oxford st', county: 'london', postcode: 'AH78HJ'},
        {placeid: 3, placename: 'London Aquarium', streetaddress: 'Riverside Building', county: 'london', postcode: 'AY68UI'}
      ]);
    });
};