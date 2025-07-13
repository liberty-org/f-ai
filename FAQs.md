# FAQs documentation

## Forbidden when access express server with port 5000

- run `lsof -i :5000` to check which process that is using this port
- if it existed then switch to another port


## docker run sql script
- docker exec -i <mysql-container-name> mysql -u root -p<pwd> < lms