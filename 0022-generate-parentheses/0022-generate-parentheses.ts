const backtrack = (str, opens, closes, n, result = []) => {
  if (opens === n && closes === n) {
    result.push(str);
    return;
  }
  if (opens < n) {
    backtrack(str + '(', opens + 1, closes,n,result);
  }
  if (closes < opens) {
    backtrack(str + ')', opens, closes + 1,n,result);
  }
  return result;
};

function generateParenthesis(n: number): string[] {
  return backtrack('', 0, 0, n, []);
};
