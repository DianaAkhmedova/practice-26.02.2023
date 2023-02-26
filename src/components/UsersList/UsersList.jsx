import { useSelector, useDispatch } from 'react-redux';
import LetteredAvatar from 'react-lettered-avatar';
import { getUsers } from 'redux/users/usersSelectors';
import { deleteUser, updateStatus } from 'redux/users/userSlice';

export const UsersList = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  return (
    <>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, age, status }, index) => {
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>
                    <LetteredAvatar name={name} />
                  </td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td onClick={() => dispatch(updateStatus(id))}>{status}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => dispatch(deleteUser(id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No users</p>
      )}
    </>
  );
};
