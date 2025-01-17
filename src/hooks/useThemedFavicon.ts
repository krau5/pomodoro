import { useEffect } from 'react';
import { useAppSelector } from 'store';
import { selectCurrentInterval } from 'store/intervals';
import { selectAppTheme } from 'store/settings';

const link = document.getElementById('favicon') as HTMLLinkElement;

export const useThemedFavicon = () => {
  const currentInterval = useAppSelector(selectCurrentInterval);
  const theme = useAppSelector(selectAppTheme);

  useEffect(() => {
    if (link) {
      link.href = `/images/favicon/${currentInterval}-${theme}.svg`;
    }
  }, [currentInterval, theme]);
};
