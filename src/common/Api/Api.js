import axios from "axios";
axios.defaults.baseURL = "https://pokemon-inhom.herokuapp.com/api/pokemon/";

export default {
  async get(endPoint, callBack, errorCallBack) {
    await axios
      .get("https://pokemon-inhom.herokuapp.com/api/pokemon/" + endPoint, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((r) => {
        callBack(r);
      })
      .catch((e) => {
        errorCallBack(e);
      });
  },
  async post(payload, endPoint, callBack, errorCallBack) {
    await axios
      .post(
        "https://pokemon-inhom.herokuapp.com/api/pokemon/" + endPoint,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((r) => {
        callBack(r);
        
      })
      .catch((e) => {
        errorCallBack(e);
      });
  },
  async put(payload, endPoint, callBack, errorCallBack) {
    await axios
      .put(
        "https://pokemon-inhom.herokuapp.com/api/pokemon/" + endPoint,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((r) => {
        callBack(r);
      })
      .catch((e) => {
        errorCallBack(e);
      });
  },
  async delete(endPoint, callBack, errorCallBack) {
    await axios
      .delete("https://pokemon-inhom.herokuapp.com/api/pokemon/" + endPoint, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((r) => {
        callBack(r);
      })
      .catch((e) => {
        errorCallBack(e);
      });
  },
};
