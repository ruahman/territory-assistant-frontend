import { Portal } from 'solid-js/web';
import { ParentProps } from 'solid-js';
import styles from './styles.module.css';

type Props = ParentProps & {
  ref: HTMLDialogElement | undefined;
};

export default function (props: Props) {
  let { ref, children } = props;

  return (
    <Portal>
      <dialog id={styles.modal} ref={ref}>
        {children}
      </dialog>
    </Portal>
  );
}
