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
            <h1>Login</h1>
            <p>login or create an account</p>
            <button class={styles.close} onClick={handleClose}>
              &times;
            </button>
          </div>
        </Modal>
      );
    },
  };
}
