import os

def count_js_files_in_current_folder():
    """
    Counts the number of .js files in the current directory and its subdirectories.
    """
    current_directory = os.getcwd()
    js_file_count = 0

    # Walk through the current directory and its subdirectories
    for root, _, files in os.walk(current_directory):
        for file in files:
            if file.endswith(".js"):
                js_file_count += 1

    print(f"Number of .js files in the current directory and its subfolders: {js_file_count}")

if __name__ == "__main__":
    count_js_files_in_current_folder()

