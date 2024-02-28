import axios from "axios";
import toast from "react-hot-toast";

export const sendNotification = (name1, name2) => {
  axios
    .post("http://localhost:8989/public/noti/notification", {
      name1,
      name2,
    })
    .then((res) => {
      console.log(res);
      toast(res.data, {
        icon: "👏",
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    });
};
