export const isEq = (): boolean => {
  return true
}

export const isNotEmptyObject = (options?: unknown): boolean => {
  if (typeof options === 'object' && options !== null) {
    return Object.keys(options).length !== 0
  } 
  return false
}

export const isTruthy = (options?: unknown): boolean => {
  if (Array.isArray(options)) {
    return options.length > 0
  }

  if (typeof options === 'object' && options !== null) {
    return Object.keys(options).length !== 0
  }

  if (typeof options === 'string') {
    return options.toLowerCase() !== 'false' && !!options
  }

  return !!options
}
