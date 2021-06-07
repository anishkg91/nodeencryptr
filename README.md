# What is This?

String encrypr and decryptr 

# For Installation

`npm i @anishg/string_encryptr`

```
first import like this

const encryptr = require('@anishg/string_encryptr')

let password = "pass"  // password

const Helper = new encryptr(password) 

```

# For Encryption 
```

Helper.encrypt('test')
    .then(data =>console.log(data))
    .catch(err => console.log(err))

```
# For Decryption

```
Helper.decrypt('CvrCscRdqDrrCs')
    .then(data =>console.log(data))
    .catch(err => console.log(err))

    
```
