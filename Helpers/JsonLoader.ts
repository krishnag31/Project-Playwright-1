
export function loadJsonWithEnv<T>(data: T): T {
  const jsonString = JSON.stringify(data);

  const replaced = jsonString.replace(/\$\{(\w+)\}/g, (_, key) => {
    const value = process.env[key];
    if (value === undefined) {
      throw new Error(`Missing environment variable: ${key}`);
    }
    return JSON.stringify(value).slice(1, -1);
  });

  return JSON.parse(replaced);
}