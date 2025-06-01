
# higher order functions არის ფუნქცია რომელიც იღებს ერთ ან მეტ პარამეტრს
# pure function  არის ფუნქცია რომელსაც არ ჭირდება დამატებით კოდები ის მხოლოდ ფუნქციის კოდს იყენებს
# impure function  არის ფუნქცია რომელსაც ჭირდება დამატებითი კოდები რომ ფუნქცია იყოს გამართული 


def process_order(food):
    print("your order:" , food)

def orderprocess_order(func,food):
    print("your order:", func , food)

process_order("bread")

orderprocess_order(process_order,"cheese")

# expression არ ვიცი    