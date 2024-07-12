<!-- # React Native E-commerce UI App

This project is an assignment for the DCIT202 Mobile Application Development course. The goal is to create a mobile application that allows users to view a list of products, add products to their cart, remove products from their cart, and view the items in their cart. The application uses local storage to save selected items on the device.

## Table of Contents

- [Features](#features)

- [Components](#components)
   - [HomeScreen](#homescreen)
   - [CartScreen](#cartscreen)
   - [ProductCard](#productcard)
   - [CartItem](#cartitem)
   - [Header](#header)
   - [Sidemenu](#sidemenu)

- [AsyncStorage Implementation](#asyncstorage-implementation)

- [ContextApi](#react-context-api)

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
- Navigate to Product Details screen from Home screen by selecting any of the product image


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
 - View the total cost of their cart.


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
- Tested on iOS and Android simulators/emulators. -->

# React Native Assignment 7

This is a React Native application that allows users to view a list of products, see detailed information about each product, add products to their cart, and remove products from their cart. The application fetches data from an external API and stores the selected items locally on the device using AsyncStorage.

## Features

- **HomeScreen**: Displays a list of available products fetched from an external API

- **ProductDetailScreen**: Shows detailed information about a selected product

- **CartScreen**: Lists the products added to the user's cart

- **Drawer navigation menu**: Accessible through a swipe gesture or button

- **Add to Cart button** for each product

- **Remove from Cart button** for each selected item in the cart

- Asynchronous data fetching using `async/await` or promises

- Local storage of selected items using AsyncStorage

## Technologies Used

- **React Native**

- **React Navigation** for routing and navigation

- **Axios** for making HTTP requests to the external API

- **AsyncStorage** for storing selected items locally on the device

## Design Choices

- **UI Design**: The application follows the provided UI mockup, ensuring a consistent and visually appealing user interface.

- **Navigation**: React Navigation was chosen for its flexibility and ease of implementation. The Drawer navigation menu allows users to easily access different screens of the application.

- **Data Fetching**: Axios was selected for making HTTP requests to the external API due to its simplicity and widespread usage in the React Native community.

- **Local Storage**: AsyncStorage was chosen for storing selected items locally on the device because it is a built-in solution provided by React Native, making it easy to implement and maintain.

## Implementation Details

- **Fetching Data from External API**: The application uses Axios to fetch product data from an external API. The fetched data is then displayed on the HomeScreen.

- **Rendering Product Lists and Details**: The HomeScreen renders a list of products, while the ProductDetailScreen displays detailed information about a selected product.

- **Adding and Removing Products from Cart**: Users can add products to their cart by clicking the "Add to Cart" button on the ProductDetailScreen. The selected items are stored in AsyncStorage. Users can remove products from their cart by clicking the "Remove from Cart" button on the CartScreen.

- **Asynchronous Operations**: The application uses `async/await` or promises to handle asynchronous operations, such as fetching data from the external API and storing/retrieving items from AsyncStorage.

## Screenshots

- **HomeScreen**


![HomeScreen](/assets/screen1.png)  ![HomeScreen](/assets/screen5.png)  ![HomeScreen](/assets/screen2.png) 


- **ProductDetailScreen**


![ProductDetailScreen](/assets/screen4.png) 


- **CartScreen**


![CartScreen](/assets/screen3.png) ![CartScreen](/assets/screen6.png) 



## Installation and Usage

```
1. Clone the repository: `git clone https://github.com/richy-andh/rn-assignment7-11254304.git`
2. Navigate to the project directory: `cd rn-assignment7-11254304`

3. Install dependencies: `npm install`

4. Start the development server: `expo start`

5. Run the application on your device or emulator

```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the MIT License.


## Credits
Developed by Richmond Andoh.
