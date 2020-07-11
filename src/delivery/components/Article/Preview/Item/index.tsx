import * as React from 'react';
import { FC } from 'react';

import { ArticleType } from '../../../../../core/ArticleType';
import { FullWidthPreview } from './FullWidthPreview';
import { HalfWidthPreview } from './HalfWidthPreview';

export interface ArticlePreview {
  article: ArticleType;
}

interface ArticlePreviewProps extends ArticlePreview {
  fullWidth: boolean;
}

export const ArticlePreview: FC<ArticlePreviewProps> = ({ fullWidth, ...rest }) => {
  if (!fullWidth) return <HalfWidthPreview {...rest} />;
  return <FullWidthPreview {...rest} />;
};
