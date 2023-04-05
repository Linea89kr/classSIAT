
# 람다식

def func1(a,b):
    return a+b
result1 = func1(10,20)
print(result1)

lm1 = lambda a, b : a+b
result2 = lm1 (10,20)
print(result2)

print((lambda a, b:a+b)(10,20))

#유사 람다식

def func2(x):
    return x * 2
print(list(map(func2, [1,2,3,4])))  # 해당 function에 대한 결과값을 다 보여줌.
print(map(func2, [1,2,3,4])) # 전부 순회해서 해당 function에 대한 결과값의 주소를 보여줌.

print(list(map(lambda x:x*2, [1,2,3,4])))
#django에서도 이런식으로 리스트를 포팅하는 경우도 있음.

# 딕셔너리 람다식
dic1 = {'a':1, 'b':2, 'c':3}

print(list(map(lambda x:x+10, dic1.values())))
print(list(map(lambda x:x+10, [dic1[i] for i in dic1])))

list2 = range(1,11)
print(list(map(lambda x: str(x) if x % 3 == 0 else x, list2)))

# 너무 길어져서 보기 힘든 문구
print(list(map(lambda x: str(x) if x % 3 == 0 else x*10 if x % 5 == 0 else x, range(1,11))))

# 람다식3
a=[1,2,3,4,5]
b = [2,4,6,8,10]
print(list(map(lambda x,y : x*y, a, b)))

#filter1
x1 = [8,9,65,3,4,18,97,45,6,31,5,89]
x2 = list(filter(lambda x : 5<x<15, x1))
print(x2)

x3= 8
print(x3 >= 5 and x3 < 10)
print(5 > x3 < 15)

# reduce
# 사용하려면 반드시 요 문구를 써야 함.
# 누적 값을 구하고자 할 경우 사용. (or 전체 합산)
from functools import reduce

x4 = [1,2,3,4,5]
print(reduce(lambda x, y: x+y, x4 ))

def func_reduce(x,y):
    print(x,y)
    return x+y

print(reduce(func_reduce,x4))
# x는 기존의 누적값 y는 그 뒤에 더할 값.

