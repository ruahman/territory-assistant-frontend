import { useModal } from '../Modal';
import styles from './styles.module.css';

export function useLogin() {
  const { openModal, closeModal, Modal } = useModal();

  function handleClose() {
    closeModal();
  }

  return {
    openLogin: openModal,
    closeLogin: closeModal,
    Login: () => {
      return (
        <Modal>
          <div id={styles.login}>
            <h4>Login</h4>
            <p>login to your account</p>
            <button class={styles.close} onClick={handleClose}>
              &times;
            </button>
            <form action="#">
              <input type="test" placeholder="email" />
              <input type="password" placeholder="password" />
              <button type="submit">Login</button>
            </form>
          </div>
        </Modal>
      );
    },
  };
}
