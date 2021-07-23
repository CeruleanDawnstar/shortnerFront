# :link:shortnerFront:link:
Web app front-end using VueJS for the link shortner application.

Link to the Shortner API >> [here](https://github.com/CeruleanDawnstar/shortnerBack) <<

Latest branch is Main

# :white_check_mark:Prerequisites:white_check_mark:

First of all, make sure to have [Node](https://nodejs.org/en/) installed.

You will also need [Docker](https://www.docker.com/) to start the container in order to make the project work.

# :rocket:Launch the project:rocket:

To launch the project, first you need to clone the project repository on [git](https://github.com/CeruleanDawnstar/shortnerBack.git)

Then you use `docker-compose up` to create the container.


# :memo:Sidenote:memo:

If you need to restart the container you can use :

> `docker-compose down`

And restart the server back up :

> `docker-compose up --build`

You can use the navbar to navigate to the different options available like login, signup, listUrl or just put the following links to test them out :
- http://localhost:8125/login to test the login
- http://localhost:8125/signUp to test the signup
- http://localhost:8125/links to list all the links stored in database
- http://localhost:8125/link/1 to get the link whose ID is 1


# :busts_in_silhouette:Contributors:busts_in_silhouette:
Contributors of this project include :
# [skillyHawk](https://github.com/skillyHawk) (Rémy)
# [296341](https://github.com/296341) (Antoine)
# [CeruleanDawnstar](https://github.com/CeruleanDawnstar) (Tahir)


# :trident:How to contribute:trident:
If you want to contribute, you can ask for a pull request. For merge and changes, open an issue; we will come back to you shortly. If approved, checkout a new branch then make sure to not have the same branch name as the branches already created. Also make sure to start your branch name with "feature/". Finally you can make a pull request, we will validate if your code is valid.

Thank you !
