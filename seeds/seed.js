const sequelize = require('../config/connection');
const { User, Content } = require('../models');

const userData = require('./userData.json');
const contentData = require('./contentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const content of contentData) {
    await Content.create({
      ...content,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
