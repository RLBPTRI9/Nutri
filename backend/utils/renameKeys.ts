export type Update = {
  from: string;
  to: string | null;
};

export default function renameKeys<T>(object: T, updates: Update[]) {
  const entries = { ...object };

  updates.forEach((update: Update) => {
    // @ts-ignore because I dont want to deal with this.
    if (update.to) entries[update.to] = entries[update.from];
    // @ts-ignore because I dont want to deal with this.
    delete entries[update.from];
  });
  // @ts-ignore
  return entries;
}
