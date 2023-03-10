import React from "react";
import "../../styles/Register.css";
import axios from "../../util/axios.config"
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const password = data.get("password");
    const confirm = data.get("confirmPassword");
    const dataForm = {
      firstName,
          lastName,
          email,
          password,
          confirm,
    }
    try {
      const res = await axios.post("/api/signup", dataForm)
        if(res.data){
          setUser(res.data);

          setTimeout(() => {
            navigate("/login");
          }, 2000);}
    } catch (error) {
      console.log(error);
    }
  };

  const input = [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
    },
    {
      type: "email",
      name: "email",
      label: "Email",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
    },
    {
      type: "password",
      name: "confirmPassword",
      label: "Confirm Password",
    },
  ];
  return (
    <main className="mainRegister">
      <div className="containerForm">
        <p className="headingRegister">Sign up</p>
        <form action="" className="registerForm" onSubmit={handelSubmit}>
          {input.map((item, index) => (
            <div key={index} className="floating_group">
              <input
                type={item.type}
                name={item.name}
                className="inputRegister"
                id={"registerInput" + index}
                required
              />
              <label
                className="labelRegister"
                htmlFor={"registerInput" + index}
              >
                {item.label}
              </label>
            </div>
          ))}
          <button type="submit" className="buttonRegister">
            Submit
          </button>
          {user && <p style={{ color: "red" }}>{user.message}</p>}
        </form>
      </div>
    </main>
  );
}

export default Register;
