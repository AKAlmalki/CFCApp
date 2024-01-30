# Community Friends Charity App (CFC)

CFC App is a web application built using the Django framework. It is designed to impower the charity support and ease of use.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Python 3.10
- Django (5.0.1)
- Other dependencies listed in `requirements.txt`

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:
   ```bash
   git clone [repository URL]
   ```
2. Navigate to the project directory:
   ```bash
   cd CFCApp
   ```
3. Install required packages:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up the database (if applicable):
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
5. Create a superuser account (for admin access):
   ```bash
   python manage.py createsuperuser
   ```
6. Run the development server:
   ```bash
   python manage.py runserver
   ```
7. Open a browser and go to `http://localhost:8000`.

## Running the tests

Explain how to run the automated tests for this system:

```bash
python manage.py test
```

## Deployment

Add additional notes about how to deploy this on a live system.

## Built With

* [Django](https://www.djangoproject.com/) - The web framework used
* [Python](https://www.python.org/) - Programming Language
* [PostgreSQL](https://www.postgresql.org/) - Database Management System (if applicable)

## Contributing

Please read [CONTRIBUTING.md](link to CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](repository tags link).

## Authors

* Ahmed Khaled - *Initial work* - [YourGithubProfile](link to your GitHub profile)
* Anas Khaled - *Initial work* - [YourGithubProfile](link to your GitHub profile)

See also the list of [contributors](link to contributors list) who participated in this project.

## Acknowledgments

* Special Thank to Dr.Fahad AlQurashi for his guidance and huge support.
