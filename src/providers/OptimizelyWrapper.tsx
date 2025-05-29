'use client';

import { OptimizelyProvider, createInstance } from '@optimizely/react-sdk';
import { ReactNode } from 'react';

const optimizelyClient = createInstance({
  sdkKey: process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY,
});

export default function OptimizelyWrapper({ children }: { children: ReactNode }) {
  const isMobile = typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);

  return (
    <OptimizelyProvider
      optimizely={optimizelyClient}
      user={{
        id: 'user_123',
        attributes: {
          deviceType: isMobile ? 'mobile' : 'desktop',
        },
      }}
    >
      {children}
    </OptimizelyProvider>
  );
}
