export { localStorageEffect };

// references Recoil AtomEffect
type TDerivedAtomEffectSetSelf = (param:
| any
| ((param: any) => string),
) => void;

// references Recoil AtomEffect
type TDerivedAtomEffectOnSet = (param: (
  newValue: any, oldValue: any, isReset: boolean) => void,
) => void;

const localStorageEffect = (key: string) => ({
  setSelf,
  onSet,
}: {
  setSelf: TDerivedAtomEffectSetSelf,
  onSet: TDerivedAtomEffectOnSet,
}) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue: any, _: any, isReset: any) => {
    if (isReset) return localStorage.removeItem(key);
    return localStorage.setItem(key, JSON.stringify(newValue));
  });
};
