import { THEME_COLOR_LIGHT, THEME_COLOR_DARK } from '@/constants';
import { colorMetaTags } from '@/utils/metadata';

export const Meta = () => {
  return (
    <div>
      <meta httpEquiv={'x-ua-compatible'} content={'ie=edge'} />
      {colorMetaTags.map((tag) => (
        <meta key={tag} name={tag} content={'transparent'} />
      ))}

      <meta
        name={'theme-color'}
        media={'(prefers-color-scheme: light)'}
        content={THEME_COLOR_LIGHT}
      />
      <meta
        name={'theme-color'}
        media={'(prefers-color-scheme: dark)'}
        content={THEME_COLOR_DARK}
      />
      <meta name={'view-transition'} content={'same-origin'} />
    </div>
  );
};
