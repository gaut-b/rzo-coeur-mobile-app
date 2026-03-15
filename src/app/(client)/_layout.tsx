import React from 'react';

import { RoleBasedTabLayout } from '@/components/layouts';
import {
  Basket as BasketIcon,
  History as HistoryIcon,
  Settings as SettingsIcon,
  Store as StoreIcon,
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
            headerShown: true,
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
          name: 'stores',
          options: {
            title: translate('pages.tabs.client.stores'),
            tabBarIcon: ({ color }) => <StoreIcon color={color} />,
            tabBarButtonTestID: 'stores-tab',
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
