# BadRabbitRestaurant

## Strategy

### About:

- This is a web page for the Bad Rabbit restaurant.
- They specialize in meat signature dishes and are located in the city centre of Dublin, Ireland.

### Business Goals

- We are a unique place for meat lovers with a diverse menu in a great social location.
- We would like to improve our online presence by having a website that allows simple navigation and where users can make a reservation.

### Why would a user want this:

1. The client asked to keep simplicity and focus on giving users valuable content only.

2. Previously, users left average or bad online reviews due to the restaurant having an outdated UI and too much useless information on the web.

3. Also, there was no functionality built in for online bookings and customers often called the restaurant to make reservations.

4. The new Contact Us page contains a message us, call us as well as a google maps link to our address as many customers had issues finding our restaurant in the past because we are located in a small street in a very busy area of the city centre.

5. We are offering users a full online menu where they can see our signature dishes before coming to the restaurant.

6. In other words, we are giving users an easy way to make a reservation, a clear picture of our menu and 3 main ways of communication plus our social media information.

## Scope

### Functional Specification:

1. Navigation bar with 4 links: Home, Bookings, Menu & Contact Us
2. Bad Rabbit wording logo on the top left corner
3. Bookings page will allow the user to make a reservation
4. Contact Us page will contain all contact information, phone number, location, opening hours.
5. Site must be fully responsive

### User Stories:

- As a restaurant user I want to:
  1. be able to navigate through the website content with fluidity
  2. be able to view the menu
  3. be able to book a table online
  4. be able to contact the restaurant
  5. Footer with social media links

### Design Choices:

- I wanted to present a minimalist approach in this page while also giving users the most relevant information about the restaurant.

- The website will be fully responsive and should follow a "mobile first" approach.

- Users will be presented with a Home, Menu and Contact Us pages as well as a Bookings page where they can complete a simple form and make a reservation through the website.

- Social media links will be available in the footer.

- Fonts used: Oswald for headings and nav & Raleway for content

### Features

- Existing Features

  - User can navigate to the Home Page.

    <img src="images\WebScreenshots\HomeDesktop.JPG" style="height: 500px; width:900px;"/>

  - User can navigate to the Bookings Page.

      <img src="images\WebScreenshots\BookingsDesktop.JPG" style="height: 500px; width:900px;"/>

  - User can navigate to the Menu Page.

      <img src="images\WebScreenshots\MenuDesktop.JPG"  style="height: 500px; width:900px;"/>

  - User can navigate to the Contact Page.

      <img src="images\WebScreenshots\ContactUsDesktop.JPG"  style="height: 500px; width:900px;"/>

  - Clicking the Bad Rabbit Brand/Icon will redirect the user to the Home Page.
  - Clicking Book a Table or the "fork and knife" icon will bring the user to the Bookings Page.
  - In the Bookings Page the user must complete all fields in order to submit a booking successfully.
  - If any field is left blank or doesn't meet the requirements (ie: expected number of characters, correct email format) then the user will be presented with a validation message when clicking submit.

      <img src="images\WebScreenshots\BookingsValidationsDesktop.JPG" style="height: 500px; width:900px;"/>

  - After completing all fields as expected and clicking the Book Now button the "Bookings" form will be hidden to the users and a "Success" message will be displayed.

      <img src="images\WebScreenshots\BookingsThankYouDesktop.JPG" style="height: 500px; width:900px;"/>

- Features Pending Implementation
- Contact Us form functionality
- Google Maps API integration for Contact Us page

## Structure

### Technologies Used

    - HTML5
    - CSS3
    - Bootstrap 5
    - Font Awesome v5.6.3
    - JavaScript
    - Jquery

## Skeleton

### Wireframes:

- Home

  <img src="images\Wireframes\Home.JPG" alt="Home Page" style="height: 300px; width:800px;"/>

- Bookings

  <img src="images\Wireframes\Bookings.JPG" alt="Bookings Page" style="height: 300px; width:800px;"/>

- Menu

  <img src="images\Wireframes\Menu.JPG" alt="Menu Page" style="height: 300px; width:800px;"/>

- Contact Us

  <img src="images\Wireframes\ContactUs.JPG" alt="Contact Us Page" style="height: 300px; width:800px;"/>

## Testing

- All existing features have been tested on the following: Android, iPhone, iPad, iPad Prod and PC.
- The following Test Plan was executed and all scenarios passed:
  - Verify that the User can navigate to the Home Page.
  - Verify that the User can navigate to the Bookings Page.
  - Verify that the User can navigate to the Menu Page.
  - Verify that the User can navigate to the Contact Page.
  - Verify that when clicking the Bad Rabbit Brand/Icon the user will be redirected to the Home Page.
  - Verify that clicking Book a Table or the "fork and knife" icon will bring the user to the Bookings Page.
  - Verify that when in the Bookings Page the user must complete all fields in order to submit a booking successfully.
  - Verify that if any field is left blank or doesn't meet the requirements (ie: expected number of characters, correct email format) then the user will be presented with a validation message when clicking submit.
  - Verify that after completing all fields as expected and clicking the Book Now button the "Bookings" form will be hidden to the users and a "Success" message will be displayed.
  - Verify that clicking the social media links in the footer opens the link in a new tab.

## Deployment

### Deployment on Github Pages

- On Github, navigate to your branch settings
- Scroll down to GithubPages
- Select a source (the branch you want to publish)
- Click the Save button
- The page will be published after a few minutes and the page url will be displayed:
- Github pages: https://zippote.github.io/BadRabbitRestaurant/

### Local Deployment using Git

Steps on Github:

- Go to https://github.com/zippote/BadRabbitRestaurant
- Click Code
- Select HTTPS and copy the following url https://github.com/zippote/BadRabbitRestaurant.git

Steps on your local:

- Create a destination folder in your local >> ie: myFolderExample in the C drive
- Open the cmd and move to that folder >> cd C:\myFolderExample
- Type the following command: git clone https://github.com/zippote/BadRabbitRestaurant.git
- Hit enter and wait until the process is completed
- Open the project using your favourite IDE

## Credits

- Media
  - Images were taken from Unplash.com and are royalty free images.
