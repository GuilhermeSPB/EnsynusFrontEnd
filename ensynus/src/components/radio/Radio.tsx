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
    <label className="flex items-center gap-[3px] cursor-pointer select-none ml-[15px]">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}

        className="hidden peer"
      />
      

      <span className="
        w-4 h-4 rounded-full  border-[#f7c948] 
        flex items-center justify-center
        peer-checked:border-[#f7c948]
      ">

        <span className="w-4 h-4 rounded-full border-2 border-[#f7c948] flex items-center justify-center">
    <span className={`w-2 h-2 rounded-full bg-[#f7c948] transition-all ${checked ? 'scale-100' : 'scale-0'}`} />
</span>
      </span>

      <span className="text-[14px] text-[#333]">{label}</span>
    </label>
  );
}