# 📘 Day 1 Notes – Counter Component & React Hooks Deep Dive

Today’s focus was not just building a counter, but **understanding React fundamentals deeply**:
- `useState`
- `useEffect`
- `useRef`
- State batching
- Derived state vs transitions
- React render lifecycle

This document serves as my **learning notes + interview reference**.

---

## ✅ What I Built

- Counter component with:
  - Minimum value = `0`
  - Maximum value = `10`
  - Increment / Decrement buttons
  - Buttons disabled at limits
  - Warning messages at:
    - Reaching `10`
    - Transition from `1 → 0`

---

## 🧠 Key Learnings

---

## 1️⃣ `useState` – State Updates & Functional Updates

```ts
setCount(prev => prev + 1);
