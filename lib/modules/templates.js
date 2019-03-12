export const templateLinks = (link) => `${link.route} ${link.href} Title: ${link.text} Line: ${link.line}`;
export const templateValidate = (link) => `${link.route} ${link.href} Title: ${link.text} Line: ${link.line} Status: ${link.status} ${link.statusText}`;
export const templateStats = (array) => `Total: ${array[0]} Unique: ${array[1]}`;
export const templateStatsValidate = (array) => `Total: ${array[0]} Unique: ${array[1]} Broken: ${array[2]}`;