from os import getpid
print('python pid: ', getpid())

i = 0; num = 0
while i < 100000000:
    num += i
    i += 1

print('Result is: ', num)