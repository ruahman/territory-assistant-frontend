import './Home.css';

export function Home() {
  return (
    <>
    <header>
        <h1>Puerto Rico North West Territory Assistant</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <button>Log In</button>
            </ul>
        </nav>
    </header>

    <section id="home">
        <h2>Welcome</h2>
        <p>This is the terretory assistant app for the Puerto Rico North West congregation.</p>
    </section>

    <footer>
        <h2>Our Team</h2>
        <p>&copy; 2024 My Website</p>
    </footer>
    </>
  )
}
