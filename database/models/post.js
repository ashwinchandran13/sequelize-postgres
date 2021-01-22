const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content:DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations 
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments',
      onDelete: 'CASCADE'
    });
    
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author',
      onDelete: 'CASCADE',
    })
  };
  return Post;
};