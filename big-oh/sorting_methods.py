


the_list = [1,3,654,3,4,7,9,8,565,10,11,54,3,6,234,8];

def bubble_sort(array):
	count = 0;
	counter = len(array)
	while counter > 0:
		sort = False;
		for j in range(0,len(array)-1):
			temp = 0;
			if (array[j] > array[j+1]):
				temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
				sort = True;
		if (sort == False):
			break;
		else:
			count += 1;
		counter -= 1;	
	print array
	print count 

bubble_sort(the_list)
