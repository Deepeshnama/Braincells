import axios from "axios";

const fetchUsers = async (req, res) => {
  try {
    const response = await axios.get(process.env.API);

    res.status(200).json(response.data)
    return response.data;

  } catch (error) {
    throw new Error("Failed to fetch the data");
  }
};

const getAllUsers = async (req, res) => {
  try {
    let users = await fetchUsers();

    const { name, sort } = req.query;

    if (name) {
      const lowerCaseName = name.toLowerCase();

      users = users.filter((user) =>
        user.name.toLowerCase().includes(lowerCaseName)
      );
    }

    if (sort === "asc") {
      users.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (sort === "desc") {
      users.sort((a, b) => (a.name < b.name ? 1 : -1));
    }

    res.json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { fetchUsers, getAllUsers };
