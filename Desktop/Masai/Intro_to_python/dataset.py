import pandas as pd

# Data for all states of India
data = {
    "State Name": ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
                   "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
                   "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
    "Popular Food": ["Pulihora", "Thukpa", "Masor Tenga", "Litti Chokha", "Chhattisgarhi Cuisine", "Fish Curry", "Dhokla", "Bajra Khichdi", "Dham", "Thekua",
                     "Bisi Bele Bath", "Sadya", "Poha", "Pav Bhaji", "Eromba", "Jadoh", "Bai", "Smoked Pork", "Pakhala Bhata", "Makki di Roti, Sarson da Saag",
                     "Dal Baati Churma", "Phagshapa", "Idli, Dosa", "Hyderabadi Biryani", "Muya Awandru", "Aloo Rasedar", "Aloo ke Gutke", "Rosogolla"],
    "Population": [49577103, 1383727, 35607039, 124799926, 29436231, 1458545, 63872399, 25351462, 7307257, 32988134,
                   67278136, 35125000, 86361792, 123144223, 3091545, 2977276, 1097206, 2249695, 41947358, 29959090,
                   81032689, 671720, 77841267, 35193978, 3671032, 237882725, 11250858, 100630348],
    "Land Area (sq km)": [162968, 83743, 78438, 94163, 135192, 3702, 196024, 44212, 55673, 79716,
                          191791, 38852, 308350, 307713, 22327, 22429, 21081, 16579, 155707, 50362,
                          342239, 7096, 130058, 112077, 10486, 243290, 53483, 88752],
    "Capital City": ["Amaravati", "Itanagar", "Dispur", "Patna", "Raipur", "Panaji", "Gandhinagar", "Chandigarh", "Shimla", "Ranchi",
                     "Bengaluru", "Thiruvananthapuram", "Bhopal", "Mumbai", "Imphal", "Shillong", "Aizawl", "Kohima", "Bhubaneswar", "Chandigarh",
                     "Jaipur", "Gangtok", "Chennai", "Hyderabad", "Agartala", "Lucknow", "Dehradun", "Kolkata"],
    "Gender Ratio (per 1000 males)": [993, 938, 954, 918, 991, 973, 919, 879, 972, 948,
                                      973, 1084, 931, 929, 985, 989, 976, 931, 978, 895,
                                      928, 889, 996, 988, 960, 912, 963, 950]
}

# Create a DataFrame
df = pd.DataFrame(data)

# Save the DataFrame to a CSV file
csv_file_path = "indian_states_dataset.csv"
df.to_csv("dataset.py", index=False)


