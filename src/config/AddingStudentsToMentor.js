import axios from "axios";

const AddingStudentsToMentor = async (body) => {
  const result = await axios.post(
    "https://studentmentorzenclass.herokuapp.com/assignmentor/newMentor",
    body
  );
  return result;
};

export default AddingStudentsToMentor;
