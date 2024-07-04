import {Modal, openModal, closeModal} from '../modal/index.tsx'

export function openLoginModal(){
  openModal();
}

export function closeLoginModal(){
  closeModal();
}

export function LoginModal(){
  return <Modal>
    <h1>Login</h1>
  </Modal>
}
