var caps = 'gouse is always an angry boy'
caps = caps.split(' ');
caps = caps.map(x => x.charAt(0).toUpperCase()+x.slice(1))
console.log(caps);