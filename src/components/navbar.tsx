
type Props = {
  title: string 
}

export default function(props: Props){
  return ( 
    <nav class="navbar">
        <a href="#" class="toogle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="title">{props.title}</div>
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
  )
}
