import Img from 'gatsby-image';
import Link from 'gatsby-link';
import * as React from 'react';

import { TO_ABOUT_ME, TO_ALL_POSTS, TO_INDEX, TO_NEWSLETTER } from 'routes/path';
import styles from './index.module.scss';

interface HeaderProps {
  authorProfilePicture: FixedImage;
  authorInfo: AuthorInfo;
  siteInfo: SiteInfo;
}

export default function Header({ authorProfilePicture, authorInfo, siteInfo }: HeaderProps) {
  return (
    <header>
      <div className={styles.headerContent}>
        <Link to={TO_INDEX()}>
          <Img title="Home" resolutions={authorProfilePicture} className={styles.picture} />
        </Link>
        <div className={styles.profileInfo}>
          <Link to={TO_INDEX()} className={styles.name}>
            {authorInfo.name}
          </Link>
          <div className={styles.speciality}>{siteInfo.description}</div>
        </div>
        <div className={styles.links}>
          <Link to={TO_NEWSLETTER()}>Newsletter</Link>
          <Link to={TO_ALL_POSTS()}>All posts</Link>
          <Link to={TO_ABOUT_ME()}>About me</Link>
        </div>
      </div>
    </header>
  );
}