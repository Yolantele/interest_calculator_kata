## Python & Django setup

* Install `python3` via brew
* Clone the repo
* cd into repo
* Install `virtualenv` using `pip3` (think yarn)

```sh
sudo pip3 install virtualenv
```

* Create a virtualenv for the project

```sh
virtualenv -p python3 venv
```

If you're having trouble completing this step, try upgrading virtualenv first `pip3 install --upgrade virtualenv`

* Activate the virtualenv

```sh
source venv/bin/activate
```

* Install dependencies in the new virtualenv

```
pip3 install -r requirements.txt
```

```
python3 manage.py runserver
```

* Server should be running at http://localhost:8000


 ## Client setup

 * cd into `frontend` and run `yarn install`

 * Run `yarn start`. 

The webapp should now be running at http://localhost:3000 🚀


## The challenge

Create a web-app that shows how much you can expect to make from your savings
over time.

The app must satisfy the following Acceptance Criteria (ACs):

* It should allow the user to vary the initial savings amount, monthly deposit and interest rate through the UI
* It should display how much the user's initial savings amount will be worth
  over the next 50 years, to a monthly precision. This should assume that the monthly amount is paid in each month, and the value rises with the interest rate supplied.
* It should allow the user to select how often interest is paid - either 'Monthly', 'Quarterly' or 'Annually'
* All calculations must take place server-side, and all monthly projection data should be returned via an endpoint
* The calculations must be triggered onChange of any input, to give live feedback on the input data. The performance (try the slider) should be reasonable.
* You can use any tech stack on the client you like to manage app state and server communication (e.g. Redux with Thunk/Saga/other API client, Relay/Apollo/GraphQL etc.)

