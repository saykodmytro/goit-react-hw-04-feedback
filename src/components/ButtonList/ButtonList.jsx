import css from './ButtonList.module.css';

export const ButtonList = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={option} className={css.item}>
          <button
            type="button"
            className={css.btnList}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
