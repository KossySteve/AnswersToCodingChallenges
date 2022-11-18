def repeatedString(s, n)
  arr = []
  l_arr = []
  rem = n%s.size
  times = n/s.size
  rep_str = s.split(//)
  p = (rep_str.count('a') * times) + rep_str[0...rem].count('a')
end

puts repeatedString('aba', 10)
