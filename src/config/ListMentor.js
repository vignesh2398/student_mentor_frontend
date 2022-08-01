import axios from "axios";

const ListMentor = async (mentorID) => {
  const result = await axios.get(
    `https://studentmentorzenclass.herokuapp.com/${mentorID}`
  );
  return result.data;
};
export default ListMentor;
