'''n=int(input("enter the numbers"))
if n%5 == 0:
  print("hello")
else:
  print("bye")

n=int(input("enter the number"))
last_digit=n%10
print(last_digit)
n_str=str(n)
print(n_str[-1])
if last_digit%3==0:
  print("divisible by 3")
else:
  print("not divisible by 3")

n=int(input("enter the number : "))
if n%2==0:
  print("yes it is divisible by 2")
elif  n%3==0:
  print("yes it is divisible by 3")
elif n%6 == 0:
  print("yes it is divisible by 6")
else:
  print("invalid input")'''
  
n=int(input("enter the number : "))
if n>90:
  print("A")
elif n>80 & n<=90:
  print("B")
elif n>=60 & n <=80:
  print("C")
else:
  print("D")