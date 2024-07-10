import { createEffect, Accessor, Setter, onMount, onCleanup } from 'solid-js';
import Modal from '../Modal';
import styles from './styles.module.css';

type Props = {
  login: Accessor<boolean>;
  setLogin: Setter<boolean>;
};

export default function (props: Props) {
  let modalRef: HTMLDialogElement | undefined;
  let loginRef: HTMLDivElement | undefined;

  const { login, setLogin } = props;

  createEffect(() => {
    if (login()) {
      modalRef?.showModal();
    } else {
      modalRef?.close();
    }
  });

  function close() {
    setLogin(false);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (!loginRef?.contains(event.target as Node)) {
      close();
    }
  };

  onMount(() => {
    document.addEventListener('mousedown', handleClickOutside);
  });

  onCleanup(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <Modal ref={modalRef}>
      <div ref={loginRef!}>
        <a href="#" class={styles.close} onClick={close}>
          <img src="/img/close.svg" alt="menu" />
        </a>
        <h1>Login</h1>
      </div>
    </Modal>
  );
}
