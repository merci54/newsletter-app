import { type FormikHelpers } from "formik";
import css from "./App.module.scss";
import { sendEmail } from "../../utils/sendMail";
import { useState } from "react";
import toast from "react-hot-toast";
import SuccessBlock from "../SuccessBlock/SuccessBlock";
import SubscribeBlock from "../SubscribeBlock/SubscribeBlock";

export interface initialValuesProps {
  email: string;
}

export default function App() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<null | string>(null)

  const submitHandler = async (value: initialValuesProps, {resetForm}: FormikHelpers<initialValuesProps>) => {
    try {
      await sendEmail({email: value.email});
      setEmail(value.email);
      setIsSuccess(true);
      resetForm();
    } catch {
      toast.error("Error sending email. Check you email and try again.")
    }
    
    
  }
  return (
    <div className={css.wrapper}>
      {isSuccess ? <SuccessBlock setIsSuccess={setIsSuccess} email={email} /> : <SubscribeBlock submitHandler={submitHandler} />}
    </div>
  );
}
