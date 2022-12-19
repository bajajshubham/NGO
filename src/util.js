import Axios from "axios";

// ===================== for fetching data =================//
let data = [];
export const fetchDetails = async (path) => {
  let response = await extract(path);
  return data;
};

const extract = async (path) => {
  await Axios.get(path)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => console.log(err.message));
};

//===========================================================//