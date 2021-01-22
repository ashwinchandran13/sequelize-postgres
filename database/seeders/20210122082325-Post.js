
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    "POSTs",
    [
      {
        userId: 1,
        title: "Sequelize learning",
        content: 
          "I started learning sequelize. And it was good to know this stuff.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        title: "Graphql learning",
        content:
          "I started learning graphql and realized that I should know sequelize first",
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ],

    {}
  ), 

  down: (queryInterface, Sequelize) => 
    queryInterface.bulkDelete("Posts", null, {})
};