# List (Array) → Add, Remove, Edit items
fruits = ["Apple", "Banana", "Cherry"]

def add_fruit(fruit):
    fruits.append(fruit)

def remove_fruit(fruit):
    if fruit in fruits:
        fruits.remove(fruit)

def edit_fruit(index, new_fruit):
    if 0 <= index < len(fruits):
        fruits[index] = new_fruit

# Dictionary (Object) → Store student information
student = {
    "name": "Tom",
    "age": 20,
    "grade": "A"
}

# Tuple → Immutable example
student_tuple = ("Alice", 22, "B")

# Set → Remove duplicates
numbers = [1, 2, 2, 3, 4, 4, 5]
unique_numbers = set(numbers)  # Automatically removes duplicates

# Display results
print("\n📌 List (Array) Operations:")
print(f"Initial List: {fruits}")
add_fruit("Mango")
print(f"After Adding: {fruits}")
edit_fruit(1, "Orange")
print(f"After Editing: {fruits}")
remove_fruit("Apple")
print(f"After Removing: {fruits}")

print("\n📌 Dictionary (Object) - Student Info:")
for key, value in student.items():
    print(f"{key.capitalize()}: {value}")

print("\n📌 Tuple Example:")
print(f"Student Tuple: {student_tuple}")

print("\n📌 Set (Remove Duplicates):")
print(f"Unique Numbers: {unique_numbers}")