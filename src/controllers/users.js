import Users from "../models/users";

export const UsersGetAll = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({
      error: "Không có users",
    });
  }
};

export const UsersGetOne = async (req, res) => {
  try {
    // const user = await
  } catch (error) {
    return res.status(400).json({
      error: "Không có users",
    });
  }
};

export const UsersRemove = async (req, res) => {
  try {
    const users = await Users.findOneAndDelete(req.params.id).exec();
    // console.log(users);
    res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({
      error: "Xóa users thất bại",
    });
  }
};
