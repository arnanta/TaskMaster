const users = [
  { email: 'arnantachatterjee@gmail.com', password: 'abc123' },
  { email: 'admin@example.com', password: 'admin123' },
];

export function validateUser(email: string, password: string) {
  return users.find((user) => user.email === email && user.password === password);
}
