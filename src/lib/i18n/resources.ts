import fr from '@/translations/fr.json';

export const resources = {
  fr: {
    translation: fr,
  },
};

export type Language = keyof typeof resources;
