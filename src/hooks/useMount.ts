import { ANIMATION_MOUNT_UNMOUNT_TIME } from '@constants/common';

import { useEffect, useState } from 'react';

export const useMount = (animStart: boolean) => {
  const [mounted, setMounted] = useState(animStart);

  useEffect(() => {
    if (animStart && !mounted) {
      setMounted(true);
    } else if (!animStart && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_MOUNT_UNMOUNT_TIME);
    }
  }, [animStart, mounted]);

  return {
    mounted,
  };
};
