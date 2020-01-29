import React from 'react';
import './PlatformList.scss'
import { ReactComponent as PC } from '../img/pc.svg';
import { ReactComponent as Xbox } from '../img/xbox.svg';
import { ReactComponent as PlayStation } from '../img/ps.svg';
import { ReactComponent as Nintendo } from '../img/switch.svg';
import { ReactComponent as Mac } from '../img/mac.svg';
import { ReactComponent as Ios} from '../img/ios.svg';
import { ReactComponent as Android} from '../img/android.svg';

const iconMap = {
  pc: <PC key="pc" className="platform__icon platform__icon--pc" />,
  xbox: <Xbox key="xbox" className="platform__icon platform__icon--xbox" />,
  playstation: <PlayStation key="ps" className="platform__icon platform__icon--playstation" />,
  nintendo: <Nintendo key="nintendo" className="platform__icon platform__icon--nintendo" />,
  mac: <Mac key="mac" className="platform__icon platform__icon--mac" />,
  ios: <Ios key="ios" className="platform__icon platform__icon--ios" />,
  android: <Android key="android" className="platform__icon platform__icon--android" />
};

const PlatformList = ({ platforms }) => {
  return (
    <div className="game-item-card__platforms">
      {platforms.map(platform => iconMap[platform.platform.slug])}
    </div>
  );
};

export default PlatformList;