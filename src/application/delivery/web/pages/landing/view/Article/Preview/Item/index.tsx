import * as React from 'react';
import { FC } from 'react';

import { ArticleType } from '../../../../../../../../../core/models/ArticleType';
import { FullWidthPreview } from './FullWidthPreview';
import { HalfWidthPreview } from './HalfWidthPreview';

export interface ArticlePreview {
  article: ArticleType;
}

interface ArticlePreviewProps extends ArticlePreview {
  fullWidth: boolean;
}

export const ArticlePreview: FC<ArticlePreviewProps> = ({ fullWidth, article }) => {
  if (!fullWidth) return <HalfWidthPreview article={article} />;
  return <FullWidthPreview article={article} />;
};
