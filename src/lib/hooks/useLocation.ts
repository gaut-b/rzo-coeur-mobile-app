import * as Location from 'expo-location';
import { useCallback, useEffect, useState } from 'react';

export type LocationPermissionStatus = {
  granted: boolean;
  canAskAgain: boolean;
  status: Location.PermissionStatus;
};

export type LocationCoordinates = {
  latitude: number;
  longitude: number;
};

export const useLocation = () => {
  const [permission, setPermission] = useState<LocationPermissionStatus | null>(
    null
  );
  const [location, setLocation] = useState<LocationCoordinates | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkPermission = useCallback(async () => {
    try {
      const { status, canAskAgain } =
        await Location.getForegroundPermissionsAsync();
      setPermission({
        granted: status === Location.PermissionStatus.GRANTED,
        canAskAgain,
        status,
      });
    } catch (error) {
      console.error('Failed to check location permission:', error);
      setError('Failed to check location permission');
    }
  }, []);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  const getCurrentLocation = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
      return {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      };
    } catch (error) {
      console.error('Failed to get current location:', error);
      setError('Failed to get current location');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const requestPermission = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const { status, canAskAgain } =
        await Location.requestForegroundPermissionsAsync();
      const granted = status === Location.PermissionStatus.GRANTED;

      setPermission({
        granted,
        canAskAgain,
        status,
      });

      if (granted) {
        await getCurrentLocation();
      }

      return granted;
    } catch (error) {
      console.error('Failed to request location permission:', error);
      setError('Failed to request location permission');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [getCurrentLocation]);

  return {
    permission,
    location,
    isLoading,
    error,
    requestPermission,
    getCurrentLocation,
  };
};
