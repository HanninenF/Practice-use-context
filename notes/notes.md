## 🔷 **1. Vad är `AnotherCountContextType`?**

```ts
export type AnotherCountContextType = {
  count: number;
  add: () => void;
  subtract: () => void;
  reset: () => void;
  divideBy2: () => void;
  setTo100: () => void;
};
```

Det här är en **TypeScript-typ** som beskriver **hur ditt context-objekt ska se ut**.

| Nyckel      | Typ          | Vad det betyder                                                   |
| ----------- | ------------ | ----------------------------------------------------------------- |
| `count`     | `number`     | Ett vanligt tal (din räknare)                                     |
| `add`       | `() => void` | En funktion som inte tar några argument och inte returnerar något |
| `subtract`  | `() => void` | Samma sak som ovan – en knapptryckningsfunktion                   |
| `reset`     | `() => void` | Återställer till 0                                                |
| `divideBy2` | `() => void` | Delar `count` med 2                                               |
| `setTo100`  | `() => void` | Sätter värdet till exakt 100                                      |

---

## 🔶 **2. Vad betyder `() => void`?**

Det är en **funktionssignatur**.

- `()` → Inga parametrar
- `=>` → "returnerar"
- `void` → Funktionen returnerar **ingenting**

Exempel:

```ts
const add = (): void => {
  setCount((prev) => prev + 1);
};
```

Du anropar funktionen, men den returnerar inget värde tillbaks – den **gör** något (t.ex. ändrar `count`), men den **ger inte tillbaka ett resultat**.

---

## 🔹 **3. Vad gör `useState(0)`?**

```ts
const [count, setCount] = useState(0);
```

Detta är en vanlig **React state-hook**. Den:

- Skapar ett `count`-värde som du kan använda i din komponent
- Ger dig en funktion `setCount` som du kan använda för att uppdatera det

👉 Eftersom du har `useState(0)` här, betyder det att `count` är en `number`. TypeScript förstår detta automatiskt – men du kunde också skriva:

```ts
const [count, setCount] = useState<number>(0);
```

---

## 🔄 **4. Hur hänger allt ihop?**

Du använder `useState` för att hantera själva datan (`count`).  
Sen binder du ihop den med funktioner som du exponerar via `AnotherCountContext`.

I slutet stoppar du in allt i context-provider:

```ts
<AnotherCountContext.Provider value={{
  count,
  add,
  subtract,
  reset,
  divideBy2,
  setTo100
}}>
  {children}
</AnotherCountContext.Provider>
```

Då kan **alla komponenter som ligger inom Provider** använda `count` och de funktionerna, via `useContext`.

---
