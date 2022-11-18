=begin
  100.times do |i|
      i+=1
      if i%15==0
          puts "FizzBuzz"
      elsif i%5==0
          puts "Buzz"
      elsif i%3==0
          puts "Fizz"
      else
          puts i
      end
  end
=end
puts 3.lcm(5)

(1..100).each  |i|
  if i%3 == 0
    puts "Fizz"
end
