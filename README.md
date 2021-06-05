# What is This?

String encrypr and decryptr 

# For Installation

`npm i string_encryptr`

```
first import like this

const { encrypt, decrypt } = require('string_encryptr')

```

# For Encryption 
```

encrypt('test')
    .then(data =>console.log(data))
    .catch(err => console.log(err))

```
# For Decryption

```
decrypt('CvrCscRdqDrrCs')
    .then(data =>console.log(data))
    .catch(err => console.log(err))

    
```
