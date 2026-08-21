function simplifyPath(path: string): string {
    while (path.includes('/./')) path = path.replaceAll('/./', '/');
    let parts = path.split('/').filter(Boolean);
    while (parts.includes('..')){
        const i = parts.indexOf('..');
        if (i === 0) parts = parts.slice(1);
        else parts.splice(i-1,2);
    }
    while (parts.includes('.')){
        const i = parts.indexOf('.');
        parts.splice(i,1);
    }
    return '/' + parts.join('/');
};