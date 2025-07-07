import en from './en';
import de from './de';

const translations: Record<string, any> = { en, de };

export function useTranslation(locale: string = 'en') {
  return translations[locale] || translations.en;
}
