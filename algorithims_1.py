
# num_sum = []

# for i in range(0,1000):
# 	if i % 3 == 0 or i % 5 == 0:
# 		num_sum.append(i)

# answer = sum(num_sum)

# print answer


# fib_list = [1,1]
# f = 1
# even_list = []

# while f <= 4000000:
# 	f = fib_list[-1] + fib_list[-2]
# 	fib_list.append(f)

# del fib_list[-1]

# for i in fib_list:
# 	if i % 2 == 0:
# 		even_list.append(i)

# answer = sum(even_list)
# print answer

#/////////////////////////
#///////////3////////////
#///////////////////////
# factor_list = []
# prime_factor_list = []

# for i in range(2, 13195):
# 	if 13195 % i == 0:
# 		factor_list.append(i)

# # print factor_list

# for i in factor_list:
# 	for num in range(2,i-1):
# 		if i % num == 0:
# 			prime_factor_list.append(i)

# print prime_factor_list


# def prime_factors(n):
# 	factors = []
# 	d = 2
# 	while n > 1:
# 		while n % d == 0:
# 			factors.append(d)
# 			n = n/d
# 		d += 1
# 	print max(factors)

# prime_factors(600851475143)

def the_sieve(n):
	prime_list = [2,3]
	i = 4
	while len(prime_list) <= n:
		for j in prime_list:
			is_prime = True
			if i % j == 0:
				is_prime = False
				break
		if is_prime:		
			prime_list.append(i)
		i += 1	
		
	print prime_list[-1]
	
the_sieve(10001)				

























