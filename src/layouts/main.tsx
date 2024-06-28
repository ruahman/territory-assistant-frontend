import Navbar from '@src/components/navbar'
import '@src/layouts/main.css'

type Props = {
  headline: string
  title: string 
}

export default function (props: Props) {

  return [
    <header>
        <h1>{props.headline}</h1>
        <Navbar title={props.title} />
    </header>,
    
    <main>
        <section id="home">
            <h2>Welcome</h2>
            <p>This is the territory assistant for the PR North West congregation.</p>
        </section>
    </main>,

    <footer>
        <h2>Our Team</h2>
        <p>&copy; 2024 My Website</p>
    </footer>
  ]
}
