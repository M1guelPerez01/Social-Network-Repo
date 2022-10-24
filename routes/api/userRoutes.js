const router = require('express').Router()
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUser).post(createUser);

// /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friend/:friendId
router.route('/:userId/friend/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
