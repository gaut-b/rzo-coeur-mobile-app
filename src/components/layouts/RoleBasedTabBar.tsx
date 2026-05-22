import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '@/components/ui/colors';
import { useThemeStore } from '@/lib/state';

export function RoleBasedTabBar({
  state,
  descriptors,
  navigation,
}: Readonly<BottomTabBarProps>) {
  const { bottom } = useSafeAreaInsets();
  const selectedTheme = useThemeStore((s) => s.selectedTheme);
  const isDark = selectedTheme === 'dark';

  const activeColor = colors.white;
  const inactiveColor = isDark
    ? colors.charcoal[400]
    : 'rgba(255,255,255,0.45)';
  const backgroundColor = isDark ? colors.charcoal[850] : colors.primary[900];
  const borderColor = isDark ? colors.charcoal[700] : colors.primary[800];
  const rippleColor = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.25)';

  return (
    <View
      style={[
        styles.container,
        { backgroundColor, borderTopColor: borderColor, paddingBottom: bottom },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const color = isFocused ? activeColor : inactiveColor;

        const icon = options.tabBarIcon?.({
          focused: isFocused,
          color,
          size: 24,
        });
        const label = (() => {
          if (typeof options.tabBarLabel === 'string')
            return options.tabBarLabel;
          if (typeof options.tabBarLabel === 'function')
            return options.tabBarLabel({
              focused: isFocused,
              color,
              position: 'below-icon',
              children: options.title ?? route.name,
            });
          return options.title ?? route.name;
        })();

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({ type: 'tabLongPress', target: route.key });
        };

        return (
          <View key={route.key} style={styles.tab}>
            <View style={styles.iconWrapper}>
              <Pressable
                onPress={onPress}
                onLongPress={onLongPress}
                testID={options.tabBarButtonTestID}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={
                  typeof options.tabBarAccessibilityLabel === 'string'
                    ? options.tabBarAccessibilityLabel
                    : typeof label === 'string'
                      ? label
                      : undefined
                }
                android_ripple={
                  Platform.OS === 'android'
                    ? { borderless: false, color: rippleColor }
                    : undefined
                }
                style={styles.iconPressable}
              >
                {icon}
              </Pressable>
            </View>
            <Text style={[styles.label, { color }]}>{label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 4,
  },
  iconWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  iconPressable: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 20,
  },
  label: {
    fontSize: 10,
    marginTop: 2,
  },
});
