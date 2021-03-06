/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2020 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow strict */

import BpkMap from './src/BpkMap';
import BpkMapMarker, {
  MARKER_TYPES,
  type MarkerType,
} from './src/BpkMapMarker';
import BpkPriceMarker, { PRICE_MARKER_STATUSES } from './src/BpkPriceMarker';
import BpkOverlayView from './src/BpkOverlayView';
import withGoogleMapsScript from './src/withGoogleMapsScript';
import { type LatLong } from './src/common-types';
import {
  primaryMarkerThemeAttributes,
  secondaryMarkerThemeAttributes,
  plainMarkerThemeAttributes,
  priceMarkerThemeAttributes,
} from './src/themeAttributes';

export default BpkMap;
export type BpkMapLatLong = LatLong;
export type BpkMapMarkerType = MarkerType;
export {
  BpkMapMarker,
  BpkPriceMarker,
  BpkOverlayView,
  withGoogleMapsScript,
  primaryMarkerThemeAttributes,
  secondaryMarkerThemeAttributes,
  plainMarkerThemeAttributes,
  priceMarkerThemeAttributes,
  MARKER_TYPES,
  PRICE_MARKER_STATUSES,
};
