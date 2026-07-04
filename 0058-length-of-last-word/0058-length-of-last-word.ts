function lengthOfLastWord(s: string): number {
    const trimmed = s.split(' ').map(word => word.trim()).filter(Boolean);
    return trimmed[trimmed.length - 1].length;
};