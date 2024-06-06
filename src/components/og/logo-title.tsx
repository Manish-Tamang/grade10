const pathEmojiMap = {
  '404': '👻',
  Home: '🏠',
};
export type PathName = keyof typeof pathEmojiMap | null;

const pathTitleMap = {
  '404': 'Page not found',
  Home: 'Home',
};

const titleFontSize = 64;

export const LogoOrEmoji = (props: { path?: PathName }) => {
  const emoji = props.path ? pathEmojiMap[props.path] : null;
  if (!emoji) {
    return (
      <span style={{ fontSize: titleFontSize }}>{' '}</span>
    );
  }
  return <span style={{ fontSize: titleFontSize }}>{emoji}</span>;
};

export const PageTitle = (props: {
  path?: PathName;
  title?: string | null;
}) => {
  const { path, title } = props;
  const pathTitle = path ? pathTitleMap[path] || null : null;
  return (
    <p
      style={{
        alignSelf: 'flex-start',
        fontSize: titleFontSize,
        fontWeight: 700,
        maxWidth: 900,
        color: path ? 'white' : '#88a4e6',
        filter: path ? 'none' : 'saturate(1.5)',
      }}
    >
      {title || pathTitle || 'Schooldiary'}
    </p>
  );
};
