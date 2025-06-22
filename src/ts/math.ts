function clamp(min: number, x: number, max: number): number {
	return Math.max(Math.min(x, max), min)
}

export {
	clamp
}