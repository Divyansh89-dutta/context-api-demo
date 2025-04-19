import { useContext } from 'react';
import { UserContext } from '../UserContext'; // Import context

const UserList = () => {
  const { users, loading } = useContext(UserContext); // Access values from context

  if (loading) return <p className="text-center">Loading users...</p>; // Show loading message

  return (
    <ul className="max-w-md mx-auto mt-6 space-y-2">
      {users.map(user => (
        <li key={user.id} className="p-4 border rounded shadow">
          <p className="font-bold">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </li>
      ))}
    </ul>
  );
};
ex