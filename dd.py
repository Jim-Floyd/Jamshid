d = int(input('Kunni kiriting: '))
m = int(input('Oyni kiriting: '))
y = int(input('Yilni kiriting: '))

if m == 1 or m == 3 or m == 5 or m == 7 or m == 8 or m == 10:
    if 1 <= d <= 30:
        d = d + 1
    elif d == 31:
        d = 1
        m = m + 1
elif m == 12:
    if 1 <= d <= 30:
        d = d + 1
    elif d == 31:
        d = 1
        m = 1
        y = y + 1
elif m == 2:
    if y % 4 == 0:
        if y % 400 == 0:
            if 1 <= d <= 28:
                d = d + 1
            elif d == 29:
                d = 1
                m = 3
        else:
            if 1 <= d <= 27:
                d = d + 1
            elif d == 28:
                d = 1
                m = 3
    else:
        if 1 <= d <= 27:
            d = d + 1
        elif d == 28:
            d = 1
            m = 3
elif m == 4 or m == 6 or m == 9 or m == 11:
    if 1 <= d <= 29:
        d = d + 1
    elif d == 30:
        d = 1
        m = m + 1
print(f'{d}-{m}-{y}')
