cd C:\Mongo\bin
start cmd.exe /k "mongod --dbpath C:\node\Ftest\data"
timeout 3
start cmd.exe /k "mongo"
cd C:\node\Ftest
start cmd.exe /k "npm start"