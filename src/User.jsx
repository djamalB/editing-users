function User({ user, toggleMode, editUser }) {
  return (
    <div>
      Имя:{" "}
      {user.isEdit ? (
        <input
          value={user.name}
          onChange={(event) => editUser(user.id, "name", event.target.value)}
        />
      ) : (
        <span> {user.name} </span>
      )}
      , Фамилия:{" "}
      {user.isEdit ? (
        <input
          value={user.surname}
          onChange={(event) => editUser(user.id, "surname", event.target.value)}
        />
      ) : (
        <span> {user.surname} </span>
      )}
      , Возраст:{" "}
      {user.isEdit ? (
        <input
          value={user.age}
          onChange={(event) => editUser(user.id, "age", event.target.value)}
        />
      ) : (
        <span> {user.age} </span>
      )}
      <button onClick={() => toggleMode(user.id)}>
        {user.isEdit ? "сохранить" : "редактировать"}
      </button>
    </div>
  );
}

export default User;
