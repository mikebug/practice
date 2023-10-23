def chatbot_codesignal():
    print("Bot: Hi! I'm your CodeSignal chatbot. How can I assist you today?")
    
    while True:
        user_input = input("You: ")
        
        if "challenge" in user_input.lower():
            print("Bot: Sure! CodeSignal offers a variety of coding challenges to improve your skills.")
            print("Bot: You can find challenges on topics like algorithms, data structures, and more.")
        
        elif "language" in user_input.lower():
            print("Bot: CodeSignal supports multiple programming languages, including Python, Java, C++, and more.")
        
        elif "help" in user_input.lower():
            print("Bot: I can provide information about challenges and supported programming languages.")
        
        elif "exit" in user_input.lower():
            print("Bot: Goodbye! Feel free to ask if you have more questions.")
            break
        
        else:
            print("Bot: I'm sorry, I didn't quite understand your question. Can you please rephrase it?")
            
if __name__ == "__main__":
    chatbot_codesignal()