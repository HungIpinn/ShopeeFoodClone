import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import { APP_COLOR } from '../config/ColorConstanst';
import { responsiveFontSize, scale } from '../helpers/ScaleHelper';

type Props = {
  /** Số milliseconds còn lại (remaining) — component sẽ đếm xuống từ giá trị này */
  remainingMs: number;
  /** Gọi khi countdown kết thúc */
  onFinish?: () => void;
  /** Khoảng update (ms). Mặc định 1000 (1s) */
  tickInterval?: number;
  /** style cho hộp bao ngoài */
  style?: StyleProp<ViewStyle>;
  /** style cho ô chữ số */
  boxStyle?: StyleProp<ViewStyle>;
  /** style cho text số */
  textStyle?: StyleProp<TextStyle>;
};

function pad2(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export default function CountdownClock({
  remainingMs,
  onFinish,
  tickInterval = 1000,
  style,
  boxStyle,
  textStyle,
}: Props) {
  // internal ms state để rerender UI mỗi tick
  const [msLeft, setMsLeft] = useState<number>(() =>
    Math.max(0, Math.floor(remainingMs)),
  );

  // ref giữ timer id để clear khi cần
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // nếu prop remainingMs thay đổi từ ngoài, cập nhật lại ngay
  useEffect(() => {
    setMsLeft((prev) => {
      // nếu giá trị ngoài khác prev thì set về giá trị mới
      if (remainingMs !== prev) return Math.max(0, Math.floor(remainingMs));
      return prev;
    });
  }, [remainingMs]);

  // start timer / cleanup
  useEffect(() => {
    // clear cũ
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // nếu đã hết thì không tạo timer
    if (msLeft <= 0) {
      onFinish?.();
      return;
    }

    timerRef.current = setInterval(() => {
      setMsLeft((cur) => {
        const next = Math.max(0, cur - tickInterval);
        if (next === 0) {
          // stop timer và gọi onFinish
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          onFinish?.();
        }
        return next;
      });
    }, tickInterval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
    // NOTE: intentionally we include tickInterval and msLeft only to restart when interval changes or when msLeft becomes 0
  }, [tickInterval, msLeft, onFinish]);

  // derive hours/minutes/seconds (useMemo để tránh tính lại không cần thiết)
  const { hours, minutes, seconds } = useMemo(() => {
    const totalSec = Math.floor(msLeft / 1000);
    const s = totalSec % 60;
    const totalMin = Math.floor(totalSec / 60);
    const m = totalMin % 60;
    const h = Math.floor(totalMin / 60);
    return { hours: h, minutes: m, seconds: s };
  }, [msLeft]);

  // display strings (pad)
  const hh = pad2(hours);
  const mm = pad2(minutes);
  const ss = pad2(seconds);

  return (
    <View style={[styles.row, style]}>
      <View style={[styles.box, boxStyle]}>
        <Text style={[styles.digit, textStyle]}>{hh}</Text>
      </View>

      <Text style={styles.colon}>:</Text>

      <View style={[styles.box, boxStyle]}>
        <Text style={[styles.digit, textStyle]}>{mm}</Text>
      </View>

      <Text style={styles.colon}>:</Text>

      <View style={[styles.box, boxStyle]}>
        <Text style={[styles.digit, textStyle]}>{ss}</Text>
      </View>
    </View>
  );
}

const BOX_SIZE = scale(20);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderRadius: 6,
    backgroundColor: APP_COLOR.PINK,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  digit: {
    color: 'white',
    fontSize: responsiveFontSize(10),
    fontWeight: '600',
  },
  colon: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 4,
  },
});
