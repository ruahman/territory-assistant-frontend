import { useI18n } from '@src/context/i18n';

export default function () {
  const [language] = useI18n();
  return (
    <section>
      <h2>{language.contact_header}</h2>
      <p>{language.contact_paragraph}</p>
    </section>
  );
}
