import { Portal } from 'solid-js/web';
import { createSignal, createEffect, ParentProps } from 'solid-js';
import styles from './styles.module.css';

export function useModal() {
  let [show, setShow] = createSignal(false);
  let ref: HTMLDialogElement | undefined;

  createEffect(() => {
    if (show()) {
      ref?.showModal();
    } else {
      ref?.close();
    }
  });

  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  function handleClick(e: MouseEvent) {
    let dialogRect = ref?.getBoundingClientRect();

    // if outside
    if (
      e.clientX > dialogRect?.right! ||
      e.clientX < dialogRect?.left! ||
      e.clientY > dialogRect?.bottom! ||
      e.clientY < dialogRect?.top!
    ) {
      setShow(false);
    }
  }

  return {
    openModal,
    closeModal,
    Modal: (props: ParentProps) => (
      <Portal>
        <dialog id={styles.modal} ref={ref} onClick={handleClick}>
          {props.children}
        </dialog>
      </Portal>
    ),
  };
}
