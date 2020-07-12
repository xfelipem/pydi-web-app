import * as React from 'react';
import { FC } from 'react';

import { ArticleType } from '../../../../../../domain/model/ArticleType';
import { HalfWidthPreview } from '../Item/HalfWidthPreview';

type ArticlePreviewProps = { articles: ArticleType[] };

export const ArticlePreviewList: FC<ArticlePreviewProps> = ({ articles }) => {
  return (
    <>
      {articles.map((artcile: ArticleType) => (
        <HalfWidthPreview key={artcile.title} article={artcile} />
      ))}
    </>
  );
};
