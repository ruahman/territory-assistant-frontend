import { createContext, useContext, ParentProps } from 'solid-js';
import { createStore } from 'solid-js/store';
import en from '@src/languages/en';
import es from '@src/languages/es';
import { clone } from '@src/utils';

const I18nContext = createContext();

type Store = { [key: string]: string };

type Context = [Store, (lang: string) => void];

type Props = ParentProps;

export function I18nProvider(props: Props) {
  const t = navigator.language.split('-')[0];

  let l: Store;

  if (t === 'en') {
    l = clone(en) as Store;
  } else if (t === 'es') {
    l = clone(es) as Store;
  } else {
    l = clone(en) as Store;
  }

  const [store, setStore] = createStore<Store>(l);

  const setLanguage = (lang: string) => {
    if (lang === 'en') {
      console.log(`en: ${JSON.stringify(en)}`);
      setStore(en);
    } else if (lang === 'es') {
      console.log(`es: ${JSON.stringify(es)}`);
      setStore(es);
    }
  };

  return (
    <I18nContext.Provider value={[store, setLanguage]}>
      {props.children}
    </I18nContext.Provider>
  );
}

export function useI18n(): Context {
  let context = useContext(I18nContext) as Context;
  return context;
}
