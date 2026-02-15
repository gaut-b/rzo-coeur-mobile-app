/**
 * Formats distance in meters to a human-readable string
 * - For distances > 1000m: displays in km with 1 decimal (e.g., "2.5 km")
 * - For distances <= 1000m: displays in meters (e.g., "500 m")
 */
export const formatDistance = (meters: number): string => {
  if (meters > 1000) {
    const km = meters / 1000;
    return `${km.toFixed(1)} km`;
  }
  return `${Math.round(meters)} m`;
};

/**
 * Calculates the distance between two GPS coordinates using the Haversine formula
 * Returns distance in meters
 */
export const calculateDistance = ({
  point1,
  point2,
}: {
  point1: { latitude: number; longitude: number };
  point2: { latitude: number; longitude: number };
}): number => {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = (point1.latitude * Math.PI) / 180;
  const φ2 = (point2.latitude * Math.PI) / 180;
  const Δφ = ((point2.latitude - point1.latitude) * Math.PI) / 180;
  const Δλ = ((point2.longitude - point1.longitude) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};
