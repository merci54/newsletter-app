import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import css from "./App.module.scss";
import { sendEmail } from "../../utils/sendMail";
import { useState } from "react";

const validationSchema = Yup.object({
  email: Yup.string().email('Valid email required').required('Valid email required')
})


export default function App() {
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const [email, setEmail] = useState<null | string>(null)

  const submitHandler = async (value: {email: string}, props: FormikHelpers<{email: string}>) => {
    try {
      await sendEmail({email: value.email});
      setEmail(value.email);
      setIsSuccess(true);
      console.log(value.email);
      props.resetForm();
    } catch (error) {
      console.error(error)
    }
    
    
  }
  return (
    <div className={css.wrapper}>
      {!isSuccess ?  <div className={css.contentBlock}>
        <div className={css.imageBlock}>
          <img className={css.imageBlock__image} src="/image.svg" alt="" />
        </div>
        <div className={css.container}>
          <div className={css.textBlock}>
            <h1 className={css.textBlock__title}>Stay updated</h1>
            <p className={css.textBlock__description}>
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className={css.list}>
              <li className={css.list__item}>
                <img className={css.list__icon} src="/check.svg" alt="check icon" />
                <p>Product discovery and building what matters</p>
              </li>
              <li className={css.list__item}>
                <img className={css.list__icon} src="/check.svg" alt="check icon" />
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li className={css.list__item}>
                <img className={css.list__icon} src="/check.svg" alt="check icon" /> <p>And much more!</p>
              </li>
            </ul>
          </div>
          <div className={css.formBlock}>
            <Formik onSubmit={submitHandler} initialValues={{email: ""}} validationSchema={validationSchema}>
              {({isSubmitting, errors, touched}) => (<Form className={css.form}>
                <div className={css.labelBlock}>
                  <label className={css.form__label} htmlFor="email">
                  Email address
                  </label>

                  <ErrorMessage className={css.errorLabel} component={'span'} name="email" />
                </div>
                
              <Field
                className={`${css.form__input} ${(errors.email && touched.email) ? css.errorInput : "" }`}
                type="email"
                name="email"
                id="email"
                placeholder="email@company.com"
              />
    
              <button className={css.form__button} type="submit">
                {isSubmitting ? 'Sending...'   : 'Subscribe to monthly newsletter'}
              </button>
              </Form>)}
              
            </Formik>
            
          </div>
        </div>
      </div>  :  <div className={css.successBlock}>
                <img src="checkbig.svg" alt="check big icon" className={css.icon} />
                <h1 className={css.title}>Thanks for subscribing!</h1>
                <p className={css.description}>A confirmation email has been sent to {email} Please open it and click the button inside to confirm your subscription</p>
                <button className={css.button} onClick={() => setIsSuccess(false)}>Dismiss message</button>
      </div>}
      
     
    </div>
  );
}
