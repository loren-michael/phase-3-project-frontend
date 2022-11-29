# Loren's Phase 3 Sinatra React Project
## Introduction

The project contained in this and its sister repository were created to demonstrate knowledge of the Sinatra API backend that uses Active Record to access and persist data in the database that is found in this repo. The sister repository is a separate entity that uses Sinatra and Active Record to provide a database to interact with.

This app was developed to allow a user to manage their D&D characters. This includes creation, leveling up and deletion.


## Getting Started

In order to use this application, you will need to clone both the frontend and backend repositories onto your machine. They are located here:

[Frontend Repository Link](https://github.com/loren-michael/phase-3-project-frontend)

[Backend Repository Link](https://github.com/loren-michael/phase-3-sinatra-react-project)

### Backend Setup

Once the Backend repository is on your machine, navigate to the directory and ensure that all dependencies are installed by running:

```console
$ bundle install
```

Once finished installing, you will need to make sure there is data seeded into your database. Do this by executing the following in your console:

```console
$ bundle exec rake db:migrate db:seed
```
This will reset any data in the database and make sure you have good data to start with.


Then, start up a server to utilize the app:

```console
$ bundle exec rake server
```

This will run your server on port
[http://localhost:9292](http://localhost:9292).


### Frontend Setup

Now that your Backend is up and running and the database is seeded, we can get your React Frontend communicating to it. Navigate to the directory for the Frontend and start the application with: 

```console
$ npm start
```
Once the application is running, you can try out the login feature by using the following usernames:
player1
player2
player3
player4
player5
player6
player7
player8

The login functionality does not effect the rest of the app. All other features are accessible without loggin in.


## Read More

A blog post about the initial development of this application can be found [here](https://dev.to/lorenmichael/creating-an-app-with-react-and-sinatra-loa).