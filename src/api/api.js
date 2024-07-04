export const registryUser = async (user) => {
  const response = await fetch('https://wedev-api.sky.pro/api/user', {
    method: 'POST',
    body: JSON.stringify(user),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(Object.values(data));

  return data;
};

export const loginUser = async (user) => {
  const response = await fetch('https://wedev-api.sky.pro/api/user/login', {
    method: 'POST',
    body: JSON.stringify(user),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(Object.values(data));

  return data;
};

export const getTasks = async (token) => {
  const response = await fetch('https://wedev-api.sky.pro/api/kanban', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  if (!response.ok) throw new Error(Object.values(data));
  return data;
};

export const addTask = async (token, newTask) => {
  const response = await fetch('https://wedev-api.sky.pro/api/kanban', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newTask),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(Object.values(data));
  return data;
};

export const deleteTask = async (token, id) => {
  const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(Object.values(data));
  return data;
};

export const usersList = async () => {
  const response = await fetch('https://wedev-api.sky.pro/api/user');
  const data = response.json();
  return data;
};
