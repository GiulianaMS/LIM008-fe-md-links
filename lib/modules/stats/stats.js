export const statsLinks = (arrayLinks) => {
  const total = arrayLinks.length;
  const arrayUnique = [];
  arrayLinks.forEach((link) => {
    if (arrayUnique.indexOf(link.href) === -1) {
      arrayUnique.push(link.href);
    }
  });
  const unique = arrayUnique.length;
  const stats = [{total}, {unique}];
  return stats;
};
