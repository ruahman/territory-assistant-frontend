import styles from './styles.module.css'

type Props = {
  title: string 
}

export default function(props: Props){
  return ( 
    <nav class={styles.navbar}>
        <button class={styles.toogle}>
          <span class="material-symbols-outlined">
            menu
          </span>
        </button>
        <h3 class={styles.title}>{props.title}</h3>
        <div class={styles.links}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#help">Help</a></li>
                <li><a href="#contact">Contact</a></li>
                <button>Log In</button>
            </ul>
        </div>
    </nav>
  )
}
