import css from './SuccessBlock.module.scss';

interface SuccessBlockProps {
    setIsSuccess: (isSuccess: boolean) => void;
    email: string | null;
}

export default function SuccessBlock({setIsSuccess, email}: SuccessBlockProps) {
    return  <div className={css.successBlock}>
        <div className={css.successBlock__content}>
                <img src="bigcheck.svg" alt="check big icon" className={css.icon} />
                <h1 className={css.title}>Thanks for subscribing!</h1>
                <p className={css.description}>A confirmation email has been sent to <span className={css.description__email}>{email}.</span> Please open it and click the button inside to confirm your subscription</p>
        </div>
               
          <button className={css.button} onClick={() => setIsSuccess(false)}>Dismiss message</button>
      </div>
}