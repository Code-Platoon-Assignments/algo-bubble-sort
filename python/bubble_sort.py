# Your Code Here
def bubble_sort(lst, swps=0):
    start=swps
    swaps= swps
    for idx in range(len(lst)-1):
        if lst[idx]>lst[idx+1]:
            holder=lst[idx+1]
            lst[idx+1]=lst[idx]
            lst[idx]=holder
            swaps+=1
    if swaps == start:
        print(f"Final result: {lst}")
        print(f"Swaps: {swaps}")
    else:
        bubble_sort(lst, swaps)
        
sequence = [4, 3, 5, 0, 1]        
bubble_sort(sequence)

