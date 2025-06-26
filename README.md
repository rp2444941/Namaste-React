
### 1. **Emmet**
**Socho aapko ek bada sa HTML ka tree banana hai, jaise ek ghar ka naksha.**
- **Emmet** ek shortcut hai, jaise ghar ka naksha ek line me bana diya aur builder ne poora ghar bana diya.
- Example:  
  - Aap likhte ho: `ul>li*5`
  - Output: 5 list items waali ek unordered list ban jaati hai.
- **Yaad raho:** Emmet = Shortcuts for HTML/CSS, time bachao, code tez likho.

---

### 2. **CDN (Content Delivery Network)**
**Socho aapke ghar ke paas ek kirana store hai, aur ek dusre sheher me bhi ek store hai.**
- Jab aap kuch khareedte ho, toh paas wale store se jaldi milta hai.
- **CDN** bhi waise hi hai: Website ki files duniya bhar me servers pe hoti hain, jo user ke paas hai, wahaan se file milti hai, isliye website tez khulti hai.
- **Yaad raho:** CDN = Website ki files har jagah, user ke paas se jaldi milti hai.

---

### 3. **React ka naam React kyu hai?**
- **React** ka matlab hota hai "React karna" yaani "pratikriya dena".
- Jab user kuch karta hai (jaise button dabata hai), React turant UI ko update karta hai.
- **Facebook** ne banaya tha, kyunki unki site pe sab kuch bar-bar update hota hai.
- **Yaad raho:** React = User ki activity pe turant UI badalna.

---

### 4. **crossorigin in script tag**
- Jab aap kisi doosri website se file laate ho (jaise CDN se), toh browser check karta hai ki safe hai ya nahi.
- `crossorigin` attribute batata hai ki browser ko kaise handle karna hai.
- **Yaad raho:** crossorigin = Doosri site se file laane ka permission system.

---

### 5. **React vs ReactDOM**
- **React**: Sirf sochne ka kaam karta hai, UI ka logic banata hai.
- **ReactDOM**: React ke banaye UI ko browser me dikhata hai.
- **Example:**  
  - React = Architect (naksha banata hai)
  - ReactDOM = Builder (naksha ko ghar me badalta hai)
- **Yaad raho:** React = Dimaag, ReactDOM = Haath.

---

### 6. **react.development.js vs react.production.js**
- **Development**: Jab aap bana rahe ho, toh errors aur warnings milti hain, code bada hota hai.
- **Production**: Jab public ko dikhana hai, toh code chhota, tez aur bina warnings ke hota hai.
- **Yaad raho:** Development = Practice, Production = Final Show.

---

### 7. **async vs defer in script tag**
- **async**: Script background me download hoti hai, jaise hi milti hai, turant chal jaati hai. (Chahe HTML parsing ho rahi ho)
- **defer**: Script background me download hoti hai, lekin tabhi chalegi jab poora HTML load ho jaaye.
- **Example:**  
  - async = Jaldi se milte hi kaam shuru  
  - defer = Sab kuch ready hone ke baad kaam shuru
- **Yaad raho:** async = Turant, defer = Baad me.

---

### 8. **Library vs Framework**
- **Library**: Aap library ko bulaate ho jab zarurat ho. (Aap boss ho)
- **Framework**: Framework aapko bulata hai jab usko zarurat ho. (Framework boss hai)
- **Example:**  
  - Library = Restaurant me menu se dish mangwana  
  - Framework = Buffet me khana milta hai, jo hai wahi khana padega
- **Yaad raho:** Library = Aap control me, Framework = Framework control me.

---

**Tip:**  
Aap inko apne dosto ko samjhaane ki koshish karo, ya khud se explain karo, toh concepts aur pakke ho jaayenge!

Agar kisi point pe aur detail chahiye ho ya koi aur example chahiye ho toh batao!

## 1. **npm kya hai?**

**Socho aap ek badi library me ho, jahan har tarah ki kitaabein milti hain.**  
- **npm** waise hi ek **library hai JavaScript packages ki**.  
- Jab bhi aapko koi code ka tukda chahiye (jaise React, Lodash, Parcel), aap npm se le sakte ho.
- **npm** = Node Package Manager.  
- **npm init** = Apne project ke liye ek register kholna (package.json banana).

**Shortcut:**  
- `npm init -y` = Seedha register khol do, bina details pooche.

---

## 2. **Parcel/Webpack kya hai? Kyu chahiye?**

**Socho aapke paas 100 chhoti chhoti kitaabein hain, lekin aapko ek hi badi kitaab chahiye jo sab kuch cover karti ho.**  
- **Parcel/Webpack** aapke saare code files ko ek hi file me jod dete hain (bundle karte hain).
- Ye aapke code ko chhota, tez aur saaf bana dete hain (minify, clean, compress).
- Isse website jaldi load hoti hai.

**Install kaise karein?**  
- `npm install -D parcel` (Development ke liye)

**Run kaise karein?**  
- `npx parcel index.html` (Development)
- `npx parcel build index.html` (Production)

---

## 3. **.parcel-cache folder kya hai?**

**Socho aapne ek badi kitaab padh li, toh agli baar sirf nayi cheezein hi padhni hain, purani nahi.**  
- **.parcel-cache** me Parcel purane build ka data store karta hai, taaki agli baar sirf nayi cheezein hi process ho, isliye build tez hota hai.

---

## 4. **npx kya hai?**

**Socho aapko ek tool chahiye, lekin aap usko install nahi karna chahte, sirf ek baar use karna hai.**  
- **npx** se aap bina install kiye koi bhi npm package run kar sakte ho.

---

## 5. **dependencies vs devDependencies**

- **dependencies**: Jo cheezein aapke app ko chalane ke liye production me chahiye (jaise React).
- **devDependencies**: Sirf development ke time chahiye (jaise Parcel, testing tools).

---

## 6. **Tree Shaking kya hai?**

**Socho aap ek ped se sirf pakke hue phal todte ho, baaki sab chhod dete ho.**  
- **Tree shaking** me sirf use hone wala code final bundle me jaata hai, baaki hata diya jaata hai.

---

## 7. **Hot Module Replacement (HMR) kya hai?**

**Socho aap TV dekh rahe ho, channel change karte hi turant naya channel aa jaata hai, TV band nahi hota.**  
- **HMR** se code me changes karte hi bina page reload kiye nayi cheezein turant dikh jaati hain.

---

## 8. **Parcel ke 5 Superpowers (Aur 3 explain):**

1. **Dev Build**: Development ke liye fast build.
2. **Local Server**: Apne computer pe live preview.
3. **HMR**: Bina reload ke changes dikhte hain.
4. **Caching**: Fast build, purana data use hota hai.
5. **Minification**: Code chhota aur tez.

**Explain:**
- **Local Server**: Jaise ghar me TV dekhna, bina internet ke, waise hi apne computer pe website dekh sakte ho.
- **HMR**: Jaise TV ka channel bina TV band kiye change ho jaata hai.
- **Caching**: Jaise aapne ek baar koi cheez yaad kar li, dobara padhne ki zarurat nahi.

---

## 9. **.gitignore kya hai?**

**Socho aap apne bag me sirf important cheezein rakhte ho, kachra nahi.**  
- **.gitignore** me aap likhte ho ki kaunse files git me nahi jayengi (jaise node_modules, dist).

---

## 10. **package.json vs package-lock.json**

- **package.json**: Project ki details, dependencies, scripts, author, etc.
- **package-lock.json**: Har dependency ka exact version lock karta hai, taaki sabke system pe same cheezein install ho.

---

## 11. **package-lock.json ko manually edit kyu nahi karna chahiye?**

- Ye file automatically banti hai, aap edit karoge toh dependencies mismatch ho sakti hain.

---

## 12. **node_modules kya hai? Git pe push kyu nahi karna chahiye?**

- **node_modules**: Saare install kiye gaye packages ka bhandar.
- Iska size bahut bada hota hai, aur ye dobara install ho sakta hai, isliye git pe nahi bhejna chahiye.

---

## 13. **dist folder kya hai?**

- **dist**: Final, optimized code jo production me use hota hai.  
- Jaise ek factory me raw material se final product banta hai, waise hi dist me final code hota hai.

---

## 14. **browserslist kya hai?**

- **browserslist**: Batata hai ki kaunse browsers ke liye code optimize karna hai (jaise Chrome, Firefox, IE, etc).

---

**Tip:**  
Aap inko khud se ya dosto ko samjhaane ki koshish karo, ya apne shabdo me likho, toh concepts aur pakke ho jaayenge!

Agar kisi point pe aur detail chahiye ho ya koi aur example chahiye ho toh batao!