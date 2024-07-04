import { Portal } from 'solid-js/web';
import { ParentProps } from 'solid-js';

let dialog: HTMLDialogElement;

export function openModal() {
  dialog.showModal();
}

export function closeModal() {
  dialog.close();
}

type Props = ParentProps;

export function Modal(props: Props) {
  return (
    <Portal>
      <dialog ref={dialog}>{props.children}</dialog>
    </Portal>
  );
}
