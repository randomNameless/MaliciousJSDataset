/**
 * Clamp x to range min..max
 * @param {number} x
 * @param {number} min
 * @param {number} max
 */
export function clamp (x, min, max) {
	return Math.min(Math.max(x, min), max)
}

/**
 * Always positive modulus
 * @param {number} n
 * @param {number} m
 */
export function pmod (n, m) {
	return (n % m + m) % m
}
