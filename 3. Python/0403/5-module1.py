import datetime
from random import *

now = datetime.datetime.now()
print(now)

# i1 = random()
# print(i1)

i2 = randint(1, 1000)
# 1 이상 1000 이하.
print(i2)

i3 = uniform(1.0, 30.5)
print(i3)

i4 = randrange(0, 100, 2)
print(i4)