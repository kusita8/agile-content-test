export const getClassName = (...classes: any[]) =>
  classes.filter(Boolean).join(" ");
