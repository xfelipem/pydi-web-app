import { useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { UrlState } from '../../../state/UrlState';

export const useUrlState = () => {
  const history = useHistory();

  const params = useParams();

  return useMemo(() => new UrlState(history, params), [history, params]);
};
