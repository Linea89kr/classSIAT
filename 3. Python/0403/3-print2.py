# zfill() : 지정한 길이만큼 공간을 확보한 남은 앞부분을 0으로 채운다.
print("15".zfill(5))
print("abc"*5)
str='''
asv
sd
fgdsgdsag
asdgsdagsdgweg'''
print(str)

print("정렬되는 문자열: {:15}".format("start"))
print("정렬되는 문자열: {:<15}".format("start")) # 왼쪽 정렬
print("정렬되는 문자열: {:>15}".format("start")) # 오른쪽 정렬
print("정렬되는 문자열: {:^15}".format("start")) # 중앙 정렬

# 시작 위치 지정
print("정렬되는 숫자 :  [{1:>15}]".format(12,24))
print("정렬되는 숫자 :  [{1:^15}]".format(12,24))
print("정렬되는 숫자 :  [{1:^015}]".format(12,24))


# {1:15d}
# 1 -> 기준이 되는 글자
# :<15 얼마만큼 어디로 밀어낼 지.