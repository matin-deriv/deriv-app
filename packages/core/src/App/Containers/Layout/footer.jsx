import React from 'react';
import { PlatformContext, routes } from '@deriv/shared';
import DefaultFooter from './default-footer';
import TradersHubFooter from './trading-hub-footer';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const { is_pre_appstore } = React.useContext(PlatformContext);
    const { pathname } = useLocation();
    if (is_pre_appstore && pathname !== routes.onboarding) {
        return <TradersHubFooter />;
    } else if (pathname === routes.onboarding) {
        return null;
    }
    return <DefaultFooter />;
};

export default Footer;
