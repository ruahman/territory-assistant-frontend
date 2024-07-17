import { Router, Route, A } from '@solidjs/router';
import { ParentProps } from 'solid-js';
import Navbar from '@src/components/Navbar';
import { I18nProvider, useI18n } from '@src/context/i18n';
import styles from './styles.module.css';
import Home from './Home';
import Help from './Help';
import Contact from './Contact';

type Props = ParentProps;

function Layout(props: Props) {
  const [language] = useI18n();

  return [
    <header class={styles.layout}>
      <h1>{language.header}</h1>
      <Navbar
        title={language.title}
        links={[
          <A href="/">{language.home_title}</A>,
          <A href="/help">{language.help_title}</A>,
          <A href="/contact">{language.contact_title}</A>,
        ]}
      />
    </header>,

    <main class={styles.layout}>{props.children}</main>,

    <footer class={styles.layout}>
      <h2>Our Team</h2>
      <p>&copy; 2024 My Website</p>
    </footer>,
  ];
}

export default function () {
  return (
    <I18nProvider>
      <Router root={Layout}>
        <Route path="/" component={Home} />
        <Route path="/help" component={Help} />
        <Route path="/contact" component={Contact} />
      </Router>
    </I18nProvider>
  );
}
