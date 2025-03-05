import json

# File path where the JSON data will be stored
json_file_path = "./src/page/Ex_2/users_data.json"

# Read (parse) JSON from file
def read_json_from_file(file_path):
    try:
        with open(file_path, "r") as file:
            data = json.load(file)  # Read and parse JSON from the file
            return data
    except FileNotFoundError:
        print("File not found, returning empty list.")
        return []
    except json.JSONDecodeError:
        print("Invalid JSON format in the file.")
        return []

# Write (save) Python object as JSON to file
def write_json_to_file(data, file_path):
    try:
        with open(file_path, "w") as file:
            json.dump(data, file, indent=4)  # Write the Python object as JSON to the file
        print(f"Data successfully saved to {file_path}")
    except TypeError:
        print("Invalid data format")

# Function to add a user to the list
def add_user(data, name, age):
    data.append({"name": name, "age": age})
    return data

# Load data from file (if it exists)
users = read_json_from_file(json_file_path)
print("Initial Users List:")
print(users)

# Add a new user
updated_users = add_user(users, "Mickey", 30)
print("\nAfter Adding New User:")
print(updated_users)

# Save the updated data to the file
write_json_to_file(updated_users, json_file_path)
