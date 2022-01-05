import React, { memo } from "react";
import styles from "./habitAddForm.module.css";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={styles.addForm} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className={styles.addInput}
        type="text"
        placeholder="Habit"
      />
      <button className={styles.addButton}>Add</button>
    </form>
  );
});

export default HabitAddForm;
