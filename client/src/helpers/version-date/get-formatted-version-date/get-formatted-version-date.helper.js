const getFormattedVersionDate = createdAt => {
  const formattedDate = new Date(createdAt);
  const year = formattedDate.getFullYear();
  const day = formattedDate.getDate().toString().padStart(2, '0');
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
  const hours = formattedDate.getHours().toString().padStart(2, '0');
  const minutes = formattedDate.getMinutes().toString().padStart(2, '0');
  return `${[day, month, year].join('.')} at ${[hours, minutes].join(':')}`;
};

export { getFormattedVersionDate };
