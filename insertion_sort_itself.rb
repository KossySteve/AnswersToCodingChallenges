def sort_itself(array)
  return array && (
  n = array.size
    puts array if array.length == 1
       (n - 1).times do
         |i|
         if array[i] > array[i+1]
          array[i],array[i+1] = array[i+1], array[i]
          unsorted = true
         end
         puts array.join(" ") unless i == n-2
      end
    unsorted = true
      while unsorted
        unsorted = false
        (n - 1).times do
         |i|
          if array[i] > array[i+1]
           array[i],array[i+1] = array[i+1], array[i]
           unsorted = true
          end
        end
      end
    print array.join(" ") )
end

sort_itself([1, 4, 3, 6, 9, 2])
# => 1 4 3 6 9 2
#    1 3 4 6 9 2
#    1 3 4 6 9 2
#    1 3 4 6 9 2
#    1 2 3 4 6 9
