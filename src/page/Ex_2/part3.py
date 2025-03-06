import json
import tkinter as tk
from tkinter import messagebox

# File path where the JSON data will be stored
json_file_path = "./src/page/Ex_2/users_data.json"

# Read (parse) JSON from file
def read_json_from_file(file_path):
    try:
        with open(file_path, "r") as file:
            data = json.load(file)  # Read and parse JSON from the file
            return data
    except FileNotFoundError:
        return []
    except json.JSONDecodeError:
        return []

# Write (save) Python object as JSON to file
def write_json_to_file(data, file_path):
    try:
        with open(file_path, "w") as file:
            json.dump(data, file, indent=4)  # Write the Python object as JSON to the file
    except TypeError:
        messagebox.showerror("Error", "Invalid data format")

# Function to add a user to the list
def add_user():
    name = name_entry.get()
    age = age_entry.get()
    if not name or not age.isdigit():
        messagebox.showerror("Input Error", "Please enter a valid name and age.")
        return
    
    users = read_json_from_file(json_file_path)
    users.append({"name": name, "age": int(age)})
    write_json_to_file(users, json_file_path)
    
    messagebox.showinfo("Success", "User added successfully!")
    name_entry.delete(0, tk.END)
    age_entry.delete(0, tk.END)

def load_users():
    users = read_json_from_file(json_file_path)
    return users

# Create GUI window
root = tk.Tk()
root.title("User Input Form")
root.geometry("300x200")

tk.Label(root, text="Name:").pack()
name_entry = tk.Entry(root)
name_entry.pack()

tk.Label(root, text="Age:").pack()
age_entry = tk.Entry(root)
age_entry.pack()

tk.Button(root, text="Add User", command=add_user).pack()
tk.Button(root, text="Load Users", command=lambda: print(load_users())).pack()


root.mainloop()
