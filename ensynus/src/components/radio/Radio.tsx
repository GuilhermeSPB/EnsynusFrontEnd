import styles from "./Radio.module.css";

type RadioProps = {
  name: string;
  value: number;
  label: string;
  checked: boolean;
  onChange: (value: number) => void;
};

export default function Radio({
  name,
  value,
  label,
  checked,
  onChange,
}: RadioProps) {
  return (
    <label className={styles.container}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={e => onChange(value)}
      />
      <span className={styles.customRadio} />
      <span className={styles.label}>{label}</span>
    </label>
  );
}
