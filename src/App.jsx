import { useState } from "react";

const FEATURES = ["daily entries", "mood history", "visual statistics"];

export default function App() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("moodly_mood_tracker_app_items") || "[]"));
  const [text, setText] = useState("");
  const add = () => { if (!text.trim()) return; const next = [...items, text]; setItems(next); localStorage.setItem("moodly_mood_tracker_app_items", JSON.stringify(next)); setText(""); };
  return (<div><h1>Moodly - Mood Tracker App</h1>{FEATURES.map(f => <div key={f}>{f}</div>)}<input value={text} onChange={e => setText(e.target.value)} placeholder="Add an entry…" /><button onClick={add}>Add</button><ul>{items.map((x, i) => <li key={i}>{x}</li>)}</ul></div>);
}
