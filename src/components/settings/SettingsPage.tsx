import { Env } from '@env';
import { Alert } from 'react-native';

import { Item } from '@/components/settings/item';
import { ItemsContainer } from '@/components/settings/items-container';
import {
  FocusAwareStatusBar,
  ScrollView,
  showError,
  Text,
  View,
} from '@/components/ui';
import { useDeleteUser } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { useAuthStore } from '@/lib/state';

export function SettingsPage() {
  const signOut = useAuthStore.use.signOut();
  const deleteUserMutation = useDeleteUser();

  const onDeleteAccount = () => {
    Alert.alert(
      translate('settings.delete_account_confirm_title'),
      translate('settings.delete_account_confirm_message'),
      [
        {
          text: translate('settings.delete_account_cancel_button'),
          style: 'cancel',
        },
        {
          text: translate('settings.delete_account_confirm_button'),
          style: 'destructive',
          onPress: () => {
            deleteUserMutation.mutate(undefined, {
              onSuccess: signOut,
              onError: showError,
            });
          },
        },
      ]
    );
  };

  return (
    <>
      <FocusAwareStatusBar />

      <ScrollView>
        <View className="flex-1 px-4 pt-16 ">
          <Text className="text-xl font-bold">
            {translate('settings.title')}
          </Text>
          <ItemsContainer title="settings.about">
            <Item text="settings.app_name" value={Env.NAME} />
            <Item text="settings.version" value={Env.VERSION} />
          </ItemsContainer>

          <View className="my-8">
            <ItemsContainer>
              <Item text="settings.logout" onPress={signOut} />
              <Item text="settings.delete_account" onPress={onDeleteAccount} />
            </ItemsContainer>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
