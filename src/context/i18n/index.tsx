import { createContext, useContext, ParentProps } from 'solid-js';
import { createStore } from 'solid-js/store';
import en from '@src/languages/en';
import es from '@src/languages/es';

const I18nContext = createContext();

type Store = { [key: string]: string };

type Context = [Store, (lang: string) => void];

type Props = ParentProps;

export function I18nProvider(props: Props) {
  const t = navigator.language.split('-')[0];

  let l: Store;

  if (t === 'en') {
    l = en;
  } else if (t === 'es') {
    l = es;
  } else {
    l = en;
  }

  const [store, setStore] = createStore<Store>(l);

  const setLanguage = (lang: string) => {
    if (lang === 'en') {
      setStore(en);
    } else if (lang === 'es') {
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
