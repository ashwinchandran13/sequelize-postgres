
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Ashwin Chandran',
        email: 'ashwinchandran@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Divya Chandran',
        email: 'divyachandran@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};