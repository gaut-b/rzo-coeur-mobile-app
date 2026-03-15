import { Redirect, Tabs } from 'expo-router';
import type { ComponentProps } from 'react';
import React, { useCallback } from 'react';

import { useInitState } from '@/lib/hooks';
import { type Role, useAuthStore } from '@/lib/state';

import { RoleBasedTabBar } from './RoleBasedTabBar';

interface TabConfig {
  name: string;
  options: ComponentProps<typeof Tabs.Screen>['options'];
}

interface RoleBasedTabLayoutProps {
  readonly role: Role;
  readonly tabs: TabConfig[];
  readonly screenOptions?: ComponentProps<typeof Tabs>['screenOptions'];
}

export function RoleBasedTabLayout({
  role,
  tabs,
  screenOptions = { headerShown: true },
}: RoleBasedTabLayoutProps) {
  useInitState();
  const status = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const renderTabBar = useCallback(
    (
      props: Parameters<NonNullable<ComponentProps<typeof Tabs>['tabBar']>>[0]
    ) => <RoleBasedTabBar {...props} />,
    []
  );

  // Wait for initialization
  if (status === 'NOT_INITIALIZED') {
    return null;
  }

  // Redirect to sign-in if logged out
  if (status === 'LOGGED_OUT') {
    return <Redirect href="/sign-in" />;
  }

  // If user doesn't have the correct role, don't display anything
  // Redirection will be handled by index.tsx
  if (!user?.role || user.role !== role) {
    return null;
  }

  return (
    <Tabs screenOptions={screenOptions} tabBar={renderTabBar}>
      {tabs.map((tab) => (
        <Tabs.Screen key={tab.name} name={tab.name} options={tab.options} />
      ))}
    </Tabs>
  );
}
