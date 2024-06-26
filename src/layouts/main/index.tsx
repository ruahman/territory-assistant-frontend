import Navbar from '@src/components/navbar/index'
import styles from './styles.module.css'

type Props = {
  headline: string
  title: string 
}

export default function (props: Props) {

  return [
    <header class={styles.layout}>
        <h1>{props.headline}</h1>
        <Navbar title={props.title} />
    </header>,
    
    <main class={styles.layout}>
        <section id="home">
            <h2>Welcome</h2>
            <p>This is the territory assistant for the PR North West congregation.</p>
        </section>
    </main>,

    <footer class={styles.layout}>
        <h2>Our Team</h2>
        <p>&copy; 2024 My Website</p>
    </footer>
  ]
}
