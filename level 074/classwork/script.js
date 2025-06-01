let choice = parseInt(readLine(), 10);

switch (choice) {
    case 1:
        console.log("Americano");
        break;
    case 2:
        console.log("Espresso");
        break;
    case 3:
        console.log("Cappuccino");
        break;
    default:
        console.log("Unknown");
        break;
    }

    function switchItUp(number){

        switch (number) {
            case 0:
              return "Zero";
              break;
            case 1:
              return "One";
              break;
            case 2:
              return "Two";
              break;
            case 3:
              return "Three";
              break;
            case 4:
              return "Four";
              break;
            case 5:
              return "Five";
              break;
            case 6:
              return "Six";
              break;
            case 7:
              return "Seven";
              break;
            case 8:
              return "Eight";
              break;
            case 9:
              return "Nine";
              break;
            default:
              return "Invalid input";
          }
        }


        function getCoffeeType(choice) {
            switch (choice) {
                case 1:
                    return "Americano";
                case 2:
                    return "Espresso";
                case 3:
                    return "Cappuccino";
                default:
                    return "Unknown";
            }
        }