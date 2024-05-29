
import '@src/layouts/landing-layout.css'

type MainLayoutProps = {
  title: string 
  brand: string
}

export default function (props: MainLayoutProps) {
  return (
    <>
    <header>
        <h1 class="title">{props.title}</h1>
        <nav class="navbar">
            <a href="#" class="toogle-button">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </a>
            <div class="brand">{props.brand}</div>
            <div class="navbar-links">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#tutorials">Tutorials</a></li>
                    <li><a href="#help">Help</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <button>Log In</button>
                </ul>
            </div>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h2>Welcome</h2>
            <p>This is the territory assistant for the PR North West congregation.</p>
        </section>
    </main>

    <footer>
        <h2>Our Team</h2>
        <p>&copy; 2024 My Website</p>
    </footer>
    </>
  )
}
