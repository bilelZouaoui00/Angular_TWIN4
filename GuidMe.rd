************************************************Read JSON file
npm install --save-dev json-loader

👉tsconfig.json
"compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true,
    ...
},

👉data.service.ts
import jsonData from '../data/user.json';
*********************************************install library
npm install bootstrap
*********************************************utilisation de ngModule
👉app.module.ts
//...
import { FormsModule } from '@angular/forms';
//...
 imports: [
    //...
    FormsModule,
    // ...
  ],

