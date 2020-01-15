exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {activityid: 1, name: 'sightseeing', fun: 8, price: 120, p_id: null},
        {activityid: 2, name: 'paintballing', fun: 10, price: 60, p_id: null},
        {activityid: 3, name: 'exhibition', fun: 4, price: 20, p_id: null}
      ]);
    });
};
