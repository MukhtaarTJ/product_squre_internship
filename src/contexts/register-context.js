import { createContext, useState } from "react";

const RegisterContext = createContext(null);

const RegisterProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    internship_type: "",
    experience: "",
    home_address: "",
    country: "",
    city: "",
    relevant_skill: "",
    commitment: "",
    resume:"",
    mobile_number:""
    // comment: "",
  });

  return (
    <RegisterContext.Provider value={{ setData, data, setStep, step }}>
      {children}
    </RegisterContext.Provider>
  );
};
export default RegisterContext;
export { RegisterProvider };
