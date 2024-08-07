import { JSXElement, For } from 'solid-js';
import styles from './styles.module.css';
import { useLogin } from '../Login';
import { useI18n } from '@src/context/i18n';

type Props = {
  title: string;
  links: JSXElement[];
};

export default function (props: Props) {
  let { openLogin, Login } = useLogin();

  const [language, setLanguage] = useI18n();

  function handleClick() {
    openLogin();
  }

  function enClick() {
    setLanguage('en');
  }

  function esClick() {
    setLanguage('es');
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
          <For each={props.links}>{(item) => <li>{item}</li>}</For>
          <li>
            <a onClick={enClick}>en</a>|<a onClick={esClick}>es</a>
          </li>
          <li>
            <button id={styles.login} onClick={handleClick}>
              {language.signup}
            </button>
          </li>
          <li>
            <button id={styles.login} onClick={handleClick}>
              {language.login}
            </button>
          </li>
        </ul>
      </div>
    </nav>,
    <Login />,
  ];
}
