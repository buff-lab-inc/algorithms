def is_prime(n):
  if n < 2:
    return False

  for i in range(2, int(n ** 0.5) + 1):
    if n % i == 0:
      return False

  return True

def solution(n, k):
  basek_str = ''
  while n:
    basek_str += str(n % k)
    n //= k

  basek_str = basek_str[::-1]
  chunks = basek_str.split('0')

  ans = 0
  for chunk in chunks:
    if chunk == '': continue
    if is_prime(int(chunk)): ans += 1

  return ans