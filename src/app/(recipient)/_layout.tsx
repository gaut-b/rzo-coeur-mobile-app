import React from 'react';

import { RoleBasedTabLayout } from '@/components/layouts';
import {
  Basket as BasketIcon,
  History as HistoryIcon,
  Settings as SettingsIcon,
} from '@/components/ui/icons';
import { translate } from '@/lib/i18n';

export default function RecipientLayout() {
  return (
    <RoleBasedTabLayout
      role="RECIPIENT"
      tabs={[
        {
          name: 'index',
          options: {
            title: translate('pages.tabs.recipient.baskets'),
            tabBarIcon: ({ color }) => <BasketIcon color={color} />,
            tabBarButtonTestID: 'baskets-tab',
          },
        },
        {
          name: 'articles',
          options: {
            title: translate('pages.tabs.recipient.history_tab'),
            tabBarIcon: ({ color }) => <HistoryIcon color={color} />,
            tabBarButtonTestID: 'history-tab',
          },
        },
        {
          name: 'settings',
          options: {
            title: translate('pages.tabs.recipient.settings_tab'),
            headerShown: false,
            tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
            tabBarButtonTestID: 'settings-tab',
          },
        },
      ]}
    />
  );
}
