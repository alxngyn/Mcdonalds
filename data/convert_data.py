# Alex Nguyen
# convert mcdonalds nutritional_data csv into a json list
import json
import csv

FILE = "nutritional_data.csv"
freader = csv.reader(open(FILE, 'r'))

# save header if need it
header = next(freader)

# iterate through
items = []
for row in freader:
    new_dict = {}
    new_dict["name"] = row[0]
    new_dict["w"] = int(row[2])
    new_dict["b"] = int(row[3])
    items.append(new_dict)

# sort by weight
sorted_list =  sorted(items, key=lambda k: k['w'])
for i in sorted_list:
    print(i)

# convert to json and write to file
items_json = json.dumps(sorted_list)
new_file = "nutritional_data.json"
with(open(new_file, 'w')) as fwriter:
    fwriter.write(items_json)
