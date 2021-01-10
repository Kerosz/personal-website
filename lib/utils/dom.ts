export const canUseDOM = () => {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
};

export const isBrowser = canUseDOM();

export const parseDOM = (
  valueToBeParsed: string,
  mimeType: DOMParserSupportedType
): Document | XMLDocument => {
  if (isBrowser) {
    const parser = new DOMParser();

    return parser.parseFromString(valueToBeParsed, mimeType);
  }

  throw new Error('This operation cannot work outisde of the browser');
};
