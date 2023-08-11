def palindrome(string: str) -> bool:
    return string == string[::-1]


def main():
    string = input("Enter a string: ")
    print(f"Is {string} a palindrome? {palindrome(string)}")