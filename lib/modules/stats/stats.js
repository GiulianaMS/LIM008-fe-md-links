export const statsLinks = (arrayLinks) => {
  const total = arrayLinks.length;
  const arrayUnique = [];
  arrayLinks.forEach((link) => {
    if (arrayUnique.indexOf(link.href) === -1) {
      arrayUnique.push(link.href);
    }
  });
  const unique = arrayUnique.length;
  const stats = [total, unique];
  return stats;
};
export const brokeLinks = (arrayStats, arrayValidate) => {
  let arrayBroken = [];
  arrayValidate.forEach((link) => {
    if (link.statusText === 'Fail')
      arrayBroken.push(link);
  });
  const broken = arrayBroken.length;
  arrayStats.push(broken);
  return arrayStats; 
};
