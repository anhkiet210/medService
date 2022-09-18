const validateMessages = () => {
  return {
    required: "Trường này không được để trống!",
    type: {
        email: "Email không đúng định dạng",
        password: "Password không được để trống"
    },
  };
};


export {validateMessages}