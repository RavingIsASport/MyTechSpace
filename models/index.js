const User = require('./User');
const Content = require('./Content');

User.hasMany(Content, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Content.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Content };
