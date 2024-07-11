import Navbar from '@src/components/Navbar';
import styles from './styles.module.css';
import { useI18n } from '@src/context/i18n';

export default function () {
  const [language] = useI18n();

  return [
    <header class={styles.layout}>
      <h1>{language.header}</h1>
      <Navbar title={language.title} />
    </header>,

    <main class={styles.layout}>
      <section id="home">
        <h2>Welcome</h2>
        <p>
          This is the territory assistant for the PR North West congregation.
        </p>
      </section>
    </main>,

    <footer class={styles.layout}>
      <h2>Our Team</h2>
      <p>&copy; 2024 My Website</p>
    </footer>,
  ];
}
