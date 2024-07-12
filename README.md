# React Native E-commerce UI App

This project is an assignment for the DCIT202 Mobile Application Development course. The goal is to create a mobile application that allows users to view a list of products, add products to their cart, remove products from their cart, and view the items in their cart. The application uses local storage to save selected items on the device.

## Table of Contents

- [Features](#features)

- [Components](#components)
   - [HomeScreen](#homescreen)
   - [CartScreen](#cartscreen)
   - [ProductCard](#productcard)
   - [CartItem](#cartitem)

- [AsyncStorage Implementation](#asyncstorage-implementation)

- [Functionality](#functionality)

- [Live Demo](##live-demo)

- [Screenshots](#screenshots)

- [Installation](#installation)

- [Prerequisites](#prerequisites)

- [Usage](#usage)

- [Contributing](#contributing)

- [License](#license)

## Features

- Display products in a grid layout on the Home screen.
- Navigate to the Checkout screen from the Home screen.
- Display the list of selected products and their total cost on the Checkout screen.
- Bottom tab navigation for the Checkout screen.


## Local Storage Implementation
- **Local Storage:** Utilizes AsyncStorage to store selected items locally on the device.
  - Products added to the cart are stored persistently using AsyncStorage.
  - Upon app restart, previously selected items are retrieved from AsyncStorage and displayed in the CartScreen.


## Functionality
 ### The application has the following functionality:

 #### Users should be able to:

 - View a list of available products.
 - Add products to their cart.
 - Remove products from their cart.
 - View the items in their cart.




## Screenshots

### Home Screen

![Home Screen](/assets/screenshot1.png)


### Checkout Screen

![Checkout Screen](/assets/screenshot2.png)


## Installation

1. **Clone the repository:**
    ```bash

    git clone https://github.com/richy-andoh/rn-assignment6-11254304.git

    cd rn-assignment6-11254304

    ```

2. **Install the dependencies:**
    ```bash

    npm install

    ```

3. **Start the Expo server:**
    ```bash

    npm start

    ```

## Usage

1. **Run the app on an Android or iOS device:**
    - Use the Expo Go app to scan the QR code displayed in your terminal.

2. **Explore the app:**
    - Browse products on the Home screen.
    - Navigate to the Checkout screen to view the selected products and their total cost.


### Live Demo

<a href="https://www.webmobilefirst.com/en/screencasts/KjftYbAvQ4/">Demo</a>


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.


## Additional Information
- This project was developed using React Native(Expo) version X.X.X.
- Tested on iOS and Android simulators/emulators.

## Credits
Developed by Richmond Andoh.
