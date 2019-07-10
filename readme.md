## Lazy Filter

#### Remove or filter out value, or list of values from JSON object lazily.

**Sample use case**

*Sample JSON object that I want to apply filter*

```
const user = {
  "firstName" :  "Pallab",
  "lastName" :  "Gain",
  "email" : "example@mail.com"
  "password": "my secrect password",
  "id": "my-secret-id"
}
```

*Want to remove `password, id, and email` filed from JSON object*

```
const publicUser = lazyFilter(user, ["password","id","email"])
```

*Final output* 

```
{
  "firstName" :  "Pallab",
  "lastName" :  "Gain",
}
```

