export function renderDescription(description, links = {}) {
  const parts = description.split(/({.*?})/g); // Split by {...}

  return parts.map((part, index) => {
    const match = part.match(/{(.*?)}/);
    if (match) {
      const key = match[1];
      const link = links[key];
      if (link) {
        return (
          <a
            key={index}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className=''
          >
            {link.text}
          </a>
        );
      }
    }
    return <span key={index}>{part}</span>;
  });
}
