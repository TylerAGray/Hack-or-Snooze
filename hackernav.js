"use strict";

// global to hold the User instance of the logged-in user
let currentUser;

const $navLogOut = $("#nav-logout");
const $submitForm = $("#submit-form");
const $allStoriesList = $("#all-stories-list");
const $storiesLoadingMsg = $("#stories-loading-msg");
const $storiesContainer = $(".stories-container");

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$navAllStories.on("click", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.slideToggle();
  $signupForm.slideToggle();
}

$navLogin.on("click", navLoginClick);

/** When user first logins, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
}
