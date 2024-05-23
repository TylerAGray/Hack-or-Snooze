// Using strict mode for better error handling
"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Function to display the main list of all stories when clicking on the site name */
function handleNavAllStoriesClick(evt) {
  console.debug("Clicked on All Stories", evt);
  // Hiding all page components
  hidePageComponents();
  // Displaying all stories on the page
  putStoriesOnPage();
}

// Event listener for clicking on the site name
$body.on("click", "#nav-all", handleNavAllStoriesClick);

/** Function to show the story submission form when clicking on "submit a story" */
function handleNavSubmitStoryClick(evt) {
  console.debug("Clicked on Submit Story", evt);
  // Hiding all page components except the list of all stories and the story submission form
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}

// Event listener for clicking on "submit a story"
$navSubmitStory.on("click", handleNavSubmitStoryClick);

/** Function to show favorite stories when clicking on "favorites" */
function handleNavFavoritesClick(evt) {
  console.debug("Clicked on Favorites", evt);
  // Hiding all page components
  hidePageComponents();
  // Displaying the list of favorite stories on the page
  putFavoritesListOnPage();
}

// Event listener for clicking on "favorites"
$body.on("click", "#nav-favorites", handleNavFavoritesClick);

/** Function to show user's own stories when clicking on "my stories" */
function handleNavMyStoriesClick(evt) {
  console.debug("Clicked on My Stories", evt);
  // Hiding all page components
  hidePageComponents();
  // Displaying the user's own stories on the page
  putUserStoriesOnPage();
  $ownStories.show();
}

// Event listener for clicking on "my stories"
$body.on("click", "#nav-my-stories", handleNavMyStoriesClick);

/** Function to show login/signup forms when clicking on "login" */
function handleNavLoginClick(evt) {
  console.debug("Clicked on Login", evt);
  // Hiding all page components except login/signup forms
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
  // Hiding the stories container
  $storiesContainer.hide();
}

// Event listener for clicking on "login"
$navLogin.on("click", handleNavLoginClick);

/** Function to show user profile when clicking on "profile" */
function handleNavProfileClick(evt) {
  console.debug("Clicked on Profile", evt);
  // Hiding all page components
  hidePageComponents();
  // Displaying the user profile on the page
  $userProfile.show();
}

// Event listener for clicking on "profile"
$navUserProfile.on("click", handleNavProfileClick);

/** Function to update the navbar when a user logs in */
function updateNavOnLogin() {
  console.debug("Updating Navbar on Login");
  // Displaying main navigation links
  $(".main-nav-links").css('display', 'flex');
  // Hiding the login link
  $navLogin.hide();
  // Showing the logout link
  $navLogOut.show();
  // Showing the user's profile link with their username
  $navUserProfile.text(`${currentUser.username}`).show();
}
