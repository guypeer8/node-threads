from os import getpid

num = sum((i for i in range(int(1e8))))

print('python pid: ', getpid())
print('Result is: ', num)