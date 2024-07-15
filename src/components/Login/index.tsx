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
          <a href="#" class={styles.close} onClick={handleClose}>
            <img src="/img/close.svg" alt="menu" />
          </a>
          <h1>Login</h1>
          <p>login or create an account</p>
        </Modal>
      );
    },
  };
}
