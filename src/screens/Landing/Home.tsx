import { useI18n } from '@src/context/i18n';

export default function () {
  const [language] = useI18n();
  return (
    <section>
      <h2>{language.home_header}</h2>
      <p>{language.home_paragraph}</p>
    </section>
  );
}
