import { act, renderHook } from "@testing-library/react";
import { useLocalStorage } from "./useLocalStorage";
import { describe, expect, it, beforeEach } from 'vitest';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('saves and retrieves values', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initial'));

    expect(result.current[0]).toBe('initial');

    act(() => result.current[1]('updated'));
    expect(result.current[0]).toBe('updated');
    expect(localStorage.getItem('testKey')).toBe('"updated"');
  });
})