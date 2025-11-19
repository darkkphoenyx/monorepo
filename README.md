# Monorepo setup

- Well I have used the shadcn monorepo which uses TurboRepo by default
  and all the setting are just same

### How to use the global files in apps

- By global i mean the package/ui onces.. this is a bit of a hassel to understand at first cause being Monorepo.

- So first thing to do is like have path setup on the tsconfig.json file

```javascript
//add this to line

"paths": {
      "@/*": ["./*"],
      "@workspace/ui/src/components/*": ["../../packages/ui/src/components/*"]
    },

```

- Then you should use the relative path to import your package/ui/styles/globals.css to your layout of new app

```javascript
//put this on layout

import "../../../packages/ui/src/styles/globals.css";

//and one more thing like the local globals.css is useless now. cause we are using the global one(pun) so can delete it safely
```

- Now if you want to use any components form the package/ui/styles then again manually import it..

Note: The auto import dont work (I dunno how to fix it.. it may work but I dunno how to setup the auto-import suggestion. so for now stick to manually importing things.😊)

```javascript
//import it like this-> say i want to use button of package/ui/styles/button

import { Button } from "@workspace/ui/src/components/button";

//again you dont need package here cause we've already setup paths earlier i.e @workspace/ui/* so importing everyting
```

### Now your monorepo is working!
