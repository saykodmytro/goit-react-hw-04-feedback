import css from './Notification.module.css';

export const Notification = ({ notif }) => {
  return <h2 className={css.title}>{notif}</h2>;
};
