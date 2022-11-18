
def anagram(s)
    count = 0
    n = s.length
    m = n/2

    if n.even?
      arr1 = s[0...m].split(//)
      arr2 = s[m..(n - 1)].split(//)

      while arr1.size > 0
        i = arr1[0]
        if arr2.include?(i)
                if arr1.count(i) > arr2.count(i)
                  count += arr1.count(i) - arr2.count(i)
                  arr1.delete(i)
                else
                  arr1.delete(i)
                end
        else
          count+= arr1.count(i)
          arr1.delete(i)
        end
        #p arr1
      end

    else
      count = -1
    end
    count
end
p anagram('fdhlvosfpafhalll')
