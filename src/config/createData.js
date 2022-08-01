import axios from "axios";

const createData = async (type, body) => {
  const result = await axios.post(
    `https://studentmentorzenclass.herokuapp.com/${type}`,
    body
  );
  return result;
};

export default createData;
