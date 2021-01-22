
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 1,
          postId: 2,
          comment:
            "That's a great move but was it the right way to do it",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          postId: 1,
          comment:
            "Lol said it, wrong way of learning it",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

    down: (queryInterface, Sequelize) =>
      queryInterface.bulkDelete("Comments", null, {})
};