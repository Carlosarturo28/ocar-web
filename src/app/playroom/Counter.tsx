import React from 'react';
import styles from './Counter.module.css';

interface CounterProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  color?: 'hp' | 'mana';
  icon?: React.ReactNode; // ícono React o imagen
}

export default function Counter({
  label,
  value,
  onIncrement,
  onDecrement,
  color = 'hp',
  icon,
}: CounterProps) {
  return (
    <div className={`${styles.counter} ${styles[color]}`}>
      {icon && <div className={styles.icon}>{icon}</div>}

      <div className={styles.label}>{label}</div>

      <div className={styles.controls}>
        <button
          className={styles.decrementBtn}
          onClick={onDecrement}
          aria-label={`Decrease ${label}`}
        >
          −
        </button>
        <div className={styles.value}>{value}</div>
        <button
          className={styles.incrementBtn}
          onClick={onIncrement}
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
