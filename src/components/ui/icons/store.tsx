import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Store = ({ color = '#000', ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M20 4H4C2.9 4 2 4.9 2 6V7C2 8.1 2.9 9 4 9C4 10.1 4.9 11 6 11C7.1 11 8 10.1 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 10.1 12.9 11 14 11C15.1 11 16 10.1 16 9C16 10.1 16.9 11 18 11C19.1 11 20 10.1 20 9C21.1 9 22 8.1 22 7V6C22 4.9 21.1 4 20 4M20 12C19.5 12 19 12.1 18.5 12.2V19H5.5V12.2C5 12.1 4.5 12 4 12C3.7 12 3.4 12 3.1 12.1L3 12V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V12C20.9 12 20.6 12 20.3 12.1C20.2 12 20.1 12 20 12M15 19H9V14H15V19Z"
      fill={color}
    />
  </Svg>
);
