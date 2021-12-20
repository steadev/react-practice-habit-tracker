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
// import React, { PureComponent } from "react";

// export default class HabitAddForm extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef();
//   onSubmit = (event) => {
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     this.formRef.current.reset();
//   };

//   render() {
//     return (
//       <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//         <input
//           ref={this.inputRef}
//           className="add-input"
//           type="text"
//           placeholder="Habit"
//         />
//         <button className="add-button" onClick={this.onClickAdd}>
//           Add
//         </button>
//       </form>
//     );
//   }
// }
