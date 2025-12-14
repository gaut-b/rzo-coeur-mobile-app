import React from 'react';

import { RoleBasedTabLayout } from '@/components/layouts';
import {
  Basket as BasketIcon,
  History as HistoryIcon,
  Settings as SettingsIcon,
} from '@/components/ui/icons';
import { translate } from '@/lib/i18n';

export default function ClientLayout() {
  return (
    <RoleBasedTabLayout
      role="CLIENT"
      tabs={[
        {
          name: 'index',
          options: {
            title: translate('pages.tabs.client.basket'),
            tabBarIcon: ({ color }) => <BasketIcon color={color} />,
            tabBarButtonTestID: 'basket-tab',
          },
        },
        {
          name: 'articles',
          options: {
            title: translate('pages.tabs.client.purchases'),
            tabBarIcon: ({ color }) => <HistoryIcon color={color} />,
            tabBarButtonTestID: 'articles-tab',
          },
        },
        {
          name: 'settings',
          options: {
            title: translate('pages.tabs.client.settings_tab'),
            headerShown: false,
            tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
            tabBarButtonTestID: 'settings-tab',
          },
        },
      ]}
    />
  );
}
