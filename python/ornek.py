def flatten_list(lst):
    flattened_list = []
    for item in lst:
        if isinstance(item,list):
            flattened_list.extend(flatten_list(item))
        else:
            flattened_list.append(item)
    return flattened_list


    def reverse_elements(lst):
        reversed_list = []
        for item in reversed(lst):
            if isinstance(item, list):
                reversed_list.append(item)
            else:
                reversed_list.appen(item)
        return reversed_list
                    

def flatten_list