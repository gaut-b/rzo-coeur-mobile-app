import React from 'react';

import { RoleBasedTabLayout } from '@/components/layouts';
import {
  Feed as FeedIcon,
  Settings as SettingsIcon,
  Style as StyleIcon,
} from '@/components/ui/icons';
import { translate } from '@/lib/i18n';

export default function CashierLayout() {
  return (
    <RoleBasedTabLayout
      role="CASHIER"
      tabs={[
        {
          name: 'index',
          options: {
            title: translate('pages.tabs.cashier.scanner'),
            tabBarIcon: ({ color }) => <FeedIcon color={color} />,
            tabBarButtonTestID: 'scanner-tab',
          },
        },
        {
          name: 'articles',
          options: {
            title: translate('pages.tabs.cashier.history_tab'),
            tabBarIcon: ({ color }) => <StyleIcon color={color} />,
            tabBarButtonTestID: 'history-tab',
          },
        },
        {
          name: 'settings',
          options: {
            title: translate('pages.tabs.cashier.settings_tab'),
            headerShown: false,
            tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
            tabBarButtonTestID: 'settings-tab',
          },
        },
      ]}
    />
  );
}
