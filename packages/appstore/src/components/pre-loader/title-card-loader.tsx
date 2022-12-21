import ContentLoader from 'react-content-loader';
import React from 'react';
import { DesktopWrapper, MobileWrapper } from '@deriv/components';

const TitleCardLoader = () => (
    <ContentLoader
        primaryColor={'var(--general-section-1)'}
        secondaryColor={'var(--general-hover)'}
        style={{ width: '150px', height: '48px' }}
    >
        <DesktopWrapper>
            <rect x='20' y='20' rx='4' ry='4' width='250' height='50' />
            <rect x='20' y='100' rx='3' ry='3' width='2000' height='30' />
        </DesktopWrapper>
        <MobileWrapper>
            <circle cx='240' cy='65' r='25' />
            <rect x='355' y='50' rx='0' ry='0' width='38' height='38' />
        </MobileWrapper>
    </ContentLoader>
);

export default TitleCardLoader;
