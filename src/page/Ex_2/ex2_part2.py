import tkinter as tk
from tkinter import messagebox

#  Data Structures
fruits = ["Apple", "Banana", "Cherry"]
student = {"name": "Tom", "age": 20, "grade": "A"}
student_tuple = ("Tom", 20, "A")  # Immutable data
numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 6]
unique_numbers = set(numbers)  # Remove duplicates

#  Tkinter GUI
root = tk.Tk()
root.title("Python Data Structures GUI")
root.geometry("400x500")

#  Update Listbox Display
def update_listbox():
    listbox.delete(0, tk.END)
    for fruit in fruits:
        listbox.insert(tk.END, fruit)

#  Add Fruit
def add_fruit():
    new_fruit = entry.get()
    if new_fruit:
        fruits.append(new_fruit)
        update_listbox()
        entry.delete(0, tk.END)

#  Edit Fruit
def edit_fruit():
    selected = listbox.curselection()
    new_fruit = entry.get()
    if selected and new_fruit:
        fruits[selected[0]] = new_fruit
        update_listbox()
        entry.delete(0, tk.END)

#  Remove Fruit
def remove_fruit():
    selected = listbox.curselection()
    if selected:
        fruits.pop(selected[0])
        update_listbox()

#  Show Student Info
def show_student():
    info = "\n".join(f"{key.capitalize()}: {value}" for key, value in student.items())
    messagebox.showinfo("Student Info", info)

#  Show Tuple
def show_tuple():
    messagebox.showinfo("Tuple", f"Student Tuple: {student_tuple}")

#  Show Set (Unique Numbers)
def show_set():
    messagebox.showinfo("Unique Numbers", f"Unique Numbers: {unique_numbers}")

#  GUI Elements i dont understand any of these
tk.Label(root, text="Fruits List").pack()
listbox = tk.Listbox(root)
listbox.pack()
update_listbox()

entry = tk.Entry(root)
entry.pack()

tk.Button(root, text="Add Fruit", command=add_fruit).pack()
tk.Button(root, text="Edit Fruit", command=edit_fruit).pack()
tk.Button(root, text="Remove Fruit", command=remove_fruit).pack()
tk.Button(root, text="Show Student Info", command=show_student).pack()
tk.Button(root, text="Show Tuple", command=show_tuple).pack()
tk.Button(root, text="Show Unique Numbers (set)", command=show_set).pack()

# Run the GUI
root.mainloop()
