import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  label?: string;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export default function DefaultButton({
  icon,
  label,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon} {label}
      </button>
    </>
  );
}
