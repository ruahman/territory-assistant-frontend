import { createSignal } from 'solid-js';
import styles from './styles.module.css';
import Login from '../Login';

type Props = {
  title: string;
};

export default function (props: Props) {
  const [login, setLogin] = createSignal(false);

  function handleClick() {
    setLogin(true);
  }

  return [
    <nav class={styles.navbar}>
      <label class={styles.label} for={styles.toogle}>
        <img src="/img/menu.svg" alt="menu" />
      </label>
      <input type="checkbox" id={styles.toogle}></input>
      <h3 class={styles.title}>{props.title}</h3>
      <div class={styles.links}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#tutorials">Tutorials</a>
          </li>
          <li>
            <a href="#help">Help</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#login" id={styles.login} onClick={handleClick}>
              Log In
            </a>
          </li>
        </ul>
      </div>
    </nav>,
    <Login login={login} setLogin={setLogin}></Login>,
  ];
}
