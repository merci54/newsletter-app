import css from "./App.module.scss";
export default function App() {
  return (
    <div className={css.wrapper}>
      <div className={css.contentBlock}>
        <div className={css.imageBlock}></div>
        <div className={css.textBlock}>
          <h1 className={css.textBlock__title}>Stay updated</h1>
          <p className={css.textBlock__description}>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className={css.list}>
            <li className={css.list__item}>
              <img src="/check.svg" alt="check icon" />
              <p>Product discovery and building what matters</p>
            </li>
            <li className={css.list__item}>
              <img src="/check.svg" alt="check icon" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className={css.list__item}>
              <img src="/check.svg" alt="check icon" /> <p>And much more!</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
