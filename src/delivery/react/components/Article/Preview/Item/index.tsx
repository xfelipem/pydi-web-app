import * as React from 'react';
import { FC } from 'react';

import { ArticleType } from '../../../../../../contracts/domain/ArticleType';
import { FullWidthPreview } from './FullWidthPreview';
import { HalfWidthPreview } from './HalfWidthPreview';

export interface ArticlePreview {
  article?: ArticleType;
}

interface ArticlePreviewProps extends ArticlePreview {
  fullWidth: boolean;
}

export const ArticlePreview: FC<ArticlePreviewProps> = ({ article, fullWidth, ...rest }) => {
  if (!article) return null;
  const props = { article, ...rest };
  if (!fullWidth) return <HalfWidthPreview {...props} />;
  return <FullWidthPreview {...props} />;
};
