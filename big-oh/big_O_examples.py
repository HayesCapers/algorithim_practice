# O(1)
# The size of the data set is irrelevent. number of steps will remain constant

def first_element(the_list):
	return the_list[0];

a_list = [1,2,4,6,45,234,523,5,3245,342,432,4532,234,1,14,546,543456];
a_list = []1;
a_list = range(1,1000000000000000);

def first_element_minus_one(the_list):
	element = the_list[0] - 1;
	return element;


# O(N)
# Linear Growth. The number of steps increase proportionate to however many elements there are

def loop_through_me(the_list):
	for i in the_list:
		# do something
			# it will take as many steps as there are elements in the the_list
		pass


# O(N^2)
# Represents an algorithim whose performance is directly proportional to the number of elements squared
	# A loop inside a loop

def oh_squared(the_list):
	for elem in the_list:
		for elem2 in the_list:
			# do something
			pass
# For every nested loop you add a number to the big O
# 3 nested = O(n^3)

# O(2^N)
# Represents an algorithim that doubles with each new element
# i.e. when you add one new element, it takes twice as long
	# ex. fibonacci sequences

def fib(num):
	if (num <= 1):
		return num;
	return fib(num-2) + fib(num - 1);
