# while 문

n1 = 0
while n1 < 3:
    print(n1, end=" ")
    n1 += 1

# break
n2 = 0
while n2 < 10:
    print(n2, end=" ")
    n2 += 1
    if n2 == 5:
        break

# continue
n3 = 0
while n3 < 10:
    n3 += 1
    if n3 == 5:
        continue
    print(n3, end=" \n\n")

# print(range(0))  이러면 에러 나요!
print(list(range(5)))
print(list(range(0, 11)))
print(list(range(0, 11, 2)))
print(list(range(10, 0, -1)))
print(list(range(0, 10, -1)))

print("===========================================")
for x1 in range(0, 5):
    print(x1, end=" ")

for x1 in {"a", "b", "c"}:
    print(x1, end=" ")

for x1 in {1: "a", 2: "b", 3: "c"}.items():
    print(x1, end=" ")

for x1 in {1: "a", 2: "b", 3: "c"}.keys():
    print(x1, end=" ")

for x1 in {1: "a", 2: "b", 3: "c"}.values():
    print(x1, end=" ")

for (one, two) in [(1,2),(3,4),(5,6)]:
    print("(",one,two,")", end=" ")

# for문 응용 (list comprehension)
lint1 = [i**2 for i in range(1,6)]
print(lint1)

list2 = [i for i in range (1,11) if i%2]
print(list2)

list3 = [i for i in range (1,11) if not i%2]
print(list3)

print("=============================================================")

list4 = [i*j for i in range(1, 10) for j in range(1, 10)]
print(list4)

for i in range(0, len(list4)):
    print("{:3d}".format(list4[i]), end=" ")
    if (i+1) % 9 == 0:
        print()
#
# list4 = [i*j for i in range(1, 10) for j in range(1, 10)]
# print(list4)
#
# for i in range(0, len(list4)):
#     print("{:3d}".format(list4[i]), end=" ")
#     if (i+1) % 9 == 0:
#         print()


print("=============================================================")

#for else (switch와 같다고 보면 됨)
data1 = [2,4,6,8,10]
for i in data1:
    if i > 10:
        print("10보다 큰 수 나옴")
        break
    else:
        print("10보다 큰 수 등장!")