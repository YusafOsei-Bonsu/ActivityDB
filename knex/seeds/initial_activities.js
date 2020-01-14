
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {activityid: 1, name: 'skydiving', fun: 10, price: 120, postcode: 'ET16TY'},
        {activityid: 2, name: 'fencing', fun: 8, price: 60, postcode: 'SM69GN'},
        {activityid: 3, name: 'dancing', fun: 7, price: 20, postcode: 'EM56JK'}
      ]);
    });
};
