type MainLayoutProps = {
  title: string 
  links: string[]
  main: string
  footer: string
}

export default function (props: MainLayoutProps) {
  return (
    <>
    <header>
        <h1>{props.title}</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#help">Help</a></li>
                <li><a href="#contact">Contact</a></li>
                <button>Log In</button>
            </ul>
        </nav>
    </header>

    <section id="home">
        <h2>Welcome</h2>
        <p>This is the territory assistant for the PR North West congregation.</p>
    </section>

    <footer>
        <h2>Our Team</h2>
        <p>&copy; 2024 My Website</p>
    </footer>
    </>
  )
}
