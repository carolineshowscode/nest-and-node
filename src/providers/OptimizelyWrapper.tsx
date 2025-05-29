'use client';

import { useEffect, useState } from 'react';
import { OptimizelyProvider, createInstance } from '@optimizely/react-sdk';
import { getUserId } from '@/lib/getUserId';

const optimizelyClient = createInstance({
  sdkKey: process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY || '',
});

type Props = {
  children: React.ReactNode;
};

export default function OptimizelyWrapper({ children }: Props) {
  const [userId, setUserId] = useState('server_user');
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop'>('desktop');

  useEffect(() => {
    const id = getUserId();
    setUserId(id);

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const type = isMobile ? 'mobile' : 'desktop';
    setDeviceType(type);

    optimizelyClient.setUser({
      id,
      attributes: { deviceType: type },
    });
  }, []);

  return (
    <OptimizelyProvider
      optimizely={optimizelyClient}
      user={{
        id: userId,
        attributes: { deviceType },
      }}
    >
      {children}
    </OptimizelyProvider>
  );
}
