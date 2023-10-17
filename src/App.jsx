import React, { useState } from "react";
import Users from "./Users";


 function App() {
  return (
    <div>
      <Users />
    </div>
  );
}

export default App;










// function App() {
//   // Мы создаем хук useState для того чтобы хранить выбранную дату и начальное значение в ввиде пустой строки
//   const [selectedDate, setSelectedDate] = useState("");

//   // тут аналогично мы создаем состояние для хранения названия дел и устанавливаем ей пустую строку
//   const [taskName, setTaskName] = useState("");

//   // также мы создаем состояние для хранения списков задач .Начальное значение устанавливается в пустой массив
//   const [tasks, setTasks] = useState([]);

//   // Здесь мы создаем функцию которая будет вызываться при изменении значения
//   // в поле даты,она будет обновлять значение в дате
//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };
//   // Аналогичным образом будет работать и эта функция для изменения в поле для названия
//   //  задач и будет обновлять taskName на введеное значение
//   const handleTaskNameChange = (e) => {
//     setTaskName(e.target.value);
//   };

//   // Затем мы создаем функцию которая будет проверять являются ли selectedDate и taskName пустыми и если
//   //  они не пустые мы создаем переменную newTask в которой будет объект с свойствами date и name в которых
//   // будет находится дата и название дел.И с помощью setTasks мы копируем массив из списка задач и добавляем ему новую задачу
//   // Ну и обновляем setSelectedDate и setTaskName чтобы мы могли ввести новую дату
//   const handleSaveTask = () => {
//     if (selectedDate && taskName) {
//       const newTask = { date: selectedDate, name: taskName };
//       setTasks([...tasks, newTask]);
//       setSelectedDate("");
//       setTaskName("");
//     }
//   };

//   return (
//     <div>
//       <h1>Список задач</h1>
//       {/* Дальше мы навешиваем обработчик события onChange на инпут и вызываем внутри функцию handleDateChange  */}
//       <input type="date" value={selectedDate} onChange={handleDateChange} />
//       <input
//         type="text"
//         placeholder="Название дела"
//         value={taskName}
//         onChange={handleTaskNameChange}
//       />
//       <button onClick={handleSaveTask}>Сохранить</button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task.date} - {task.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }