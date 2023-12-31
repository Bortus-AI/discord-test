import { User } from '@/types/auth';

export const localGetShowPromptBar = (user: User) => {
  const itemName = `showPromptbar-${user.email}`;
  return JSON.parse(localStorage.getItem(itemName) || '[]') as boolean;
};

export const localSaveShowPromptBar = (user: User, show: boolean) => {
  const itemName = `showPromptbar-${user.email}`;
  localStorage.setItem(itemName, JSON.stringify(show));
};

export const localGetShowPrimaryMenu = (user: User) => {
  const itemName = `showPrimaryMenu-${user.email}`;

  const savedValue = localStorage.getItem(itemName);

  if (!savedValue) {
    return null;
  }

  try {
    return JSON.parse(savedValue) as boolean;
  } catch {
    return null;
  }
};

export const localSaveShowPrimaryMenu = (user: User, show: boolean) => {
  const itemName = `showPrimaryMenu-${user.email}`;
  localStorage.setItem(itemName, JSON.stringify(show));
};

export const localGetShowSecondaryMenu = (user: User) => {
  const itemName = `showSecondaryMenu-${user.email}`;

  const savedValue = localStorage.getItem(itemName);

  if (!savedValue) {
    return null;
  }

  try {
    return JSON.parse(savedValue) as boolean;
  } catch {
    return null;
  }
};

export const localSaveShowSecondaryMenu = (user: User, show: boolean) => {
  const itemName = `showSecondaryMenu-${user.email}`;
  localStorage.setItem(itemName, JSON.stringify(show));
};
