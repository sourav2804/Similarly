# Similarly
By: Sourav Naskar

=====================           
About This Project:
=====================
This Project was developed for my CS 855 class
The main goal of this app is to Create and View Tags that can help users engage in social activities.
Users can create tags for others to see and also view others’ tags to know what’s going on outside at a certain time.

For example: If someone wants to go to a social place and see some livelihood then they can check the Explore Section to see what other people are up to.
             Another scenario is where the user has something in mind and wants to let others know about it so that the activity could be socialized, 
             then they can create a tag and put it out there for others to see.
             
==================================             
Various components of the Project:
==================================

Tags:
======
Tags are short texts/information that users can create from the home page.
Upon successful creation, the tags are stored in the database and then fetched to display in the Explore screen.
Every Tag has 3 sections that are automatically created when a user creates a new tag.
These 3 things are TagId (stores the id of the tag so it can be referred to later on), TagItem (the context of the tag i.e user input while creating), UpVoteCount (it’s a number that refers to how many people want to do the same, its similar to a like count).

![Exlore screen](https://user-images.githubusercontent.com/54137383/162671345-950ade2c-d9e2-45fd-b20b-6ad1954a28e5.jpeg)
![Tag creation](https://user-images.githubusercontent.com/54137383/162671388-07485f94-7040-48af-b8f1-59e601cf62b8.jpeg)


UpVoteCount:
============
This refers to the number of people who upvoted a particular tag. The count itself is reflected beside each tag along with a heart icon that can be interacted with by the user for giving UpVotes.

BottomNavigationBar:
====================
This is a navigation bar that always floats at the bottom of the screen while the app is running.
This bar currently contains 2 sections, Home and Explore with corresponding icons that indicated which page the user is currently on.
The BottomNavigationBar was designed to help users navigate between different screens i.e Home and Explore.

![Home Screen](https://user-images.githubusercontent.com/54137383/162671403-b43173bb-0fc8-4338-bb7f-58364fc8c781.jpeg)

TextInput Area & Create Tag Button:
===================================
Both of these components appear on the home screen. 
the User can put their tag text in the input section and upon tapping the Create Tag button they will be prompted with an alert message that indicates the successful creation of the tag.
Note: Null input will not trigger any action upon Create Tag button press.

=============
Project Setup
=============

Project environment:
====================
This is a React Native Mobile application project
I used VSC with EXPO CLI on an OSX (Mac) operating system.

Steps for setting up this Project:
==================================
For setting up this project the whole GitHub file can be downloaded as a zip file or clone the repository.

After that, you might need a couple of things before running the project 

1st, depending on what you have installed on your computer, you may need to set up Expo CLI.
For doing so please follow the link provided. This will provide detailed instructions to setup Expo CLI on your computer
https://reactnative.dev/docs/environment-setup

2nd, for navigation and stack navigator 
install the following packages:

"npm install @react-navigation/native @react-navigation/native-stack"

then  install

"expo install react-native-screens react-native-safe-area-context"


I used Firebase Realtime Database for storing and retrieving my app data.

To install Firebase in your project run the following command:

"npm install firebase"


For more info about how to set up firebase please refer to the following documentation link:
https://docs.expo.dev/guides/using-firebase/


============================================
App Features to be implemented in the future 
============================================
UserProfile Section : Users can Log in using some sort of credentials and track their Tags, UpVoteCount and also delete their Tags.
                      They can also Select a place/location(such as Regina) so that they can explore Tags around that location rather than viewing all the 
                      existing tag from all over the world.
                      Users can also edit/change the place/location to view other Tags or if they moved to a new place.

My Tag Area : It will display all the tags that the user has created and are currently live.

Auto Deletion : Any Tag will be automatically deleted after a set number of hours (for eg 3 hours). 






