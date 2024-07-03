import {Portal} from 'solid-js/web';
import {JSX} from 'solid-js';

type Props = {
  content: JSX.Element
}

export default function(props: Props){
  
  return (
    <Portal>
      <dialog>{props.content}</dialog>
    </Portal>
  )
}
