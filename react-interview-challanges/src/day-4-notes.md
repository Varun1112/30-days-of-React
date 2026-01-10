# 📘 Day 4 Notes – Input Validation, Async Checks & Debouncing in React

Day 4 focused on **real-world form validation patterns** that are commonly tested in frontend interviews.

This was not just about validating input, but about:
- UX correctness
- React state design
- Async safety
- Performance awareness

---

## 🎯 Problem Statement

Build an input field that:
- Is a controlled component
- Shows **error** if input is invalid
- Shows **success** if input is valid
- Does NOT show validation too early
- Supports async validation (e.g. username availability)
- Avoids unnecessary API calls

---

## 1️⃣ Controlled Input Basics

```js
const [value, setValue] = useState("");
