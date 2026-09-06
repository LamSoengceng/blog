export type ChartPoint = {
  x: number
  y: number
}

export type ChartPadding = {
  top: number
  right: number
  bottom: number
  left: number
}

export const toChartPoints = (
  values: number[],
  width: number,
  height: number,
  padding: ChartPadding,
  maxValue: number,
  minValue = 0,
): ChartPoint[] => {
  const usableWidth = Math.max(1, width - padding.left - padding.right)
  const usableHeight = Math.max(1, height - padding.top - padding.bottom)
  const valueRange = Math.max(1, maxValue - minValue)

  return values.map((value, index) => {
    const x =
      padding.left +
      (values.length <= 1 ? usableWidth / 2 : (index / (values.length - 1)) * usableWidth)
    const y = padding.top + usableHeight - ((value - minValue) / valueRange) * usableHeight

    return {
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
    }
  })
}

export const toPolyline = (points: ChartPoint[]) =>
  points.map((point) => `${point.x},${point.y}`).join(' ')
